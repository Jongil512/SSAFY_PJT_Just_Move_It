package com.example.justmoveit.activity;

import static com.example.justmoveit.activity.LoadingActivity.userSP;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import android.content.Intent;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.example.justmoveit.R;
import com.example.justmoveit.api.UserTicketApi;
import com.example.justmoveit.model.Movie;
import com.example.justmoveit.model.ReservedTicket;
import com.example.justmoveit.model.Ticket;
import com.example.justmoveit.model.kakaopay.PayApprove;
import com.example.justmoveit.model.kakaopay.PayReady;
import com.example.justmoveit.api.PaymentApi;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class PaymentActivity extends AppCompatActivity {
    private WebView webView;
    private static Movie movie;
    private static Ticket ticket;

    private String tidPin; //결제 고유 번호
    private String pgToken; //결제 요청 토큰
    private static String PRODUCT_NAME; //상품 이름
    private static Integer PRODUCT_PRICE; //상품 가격

    public PaymentActivity() {
    }

    public PaymentActivity(Movie m, Ticket t) {
        movie = m;
        ticket = t;
        PRODUCT_NAME = ticket.getMovieTitle();
        PRODUCT_PRICE = Integer.parseInt(ticket.getTotalCost());
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);

        webView = findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true);

        MyWebViewClient myWebViewClient = new MyWebViewClient();
        webView.setWebViewClient(myWebViewClient);
        myWebViewClient.readyAndCallPay();
    }

    // 카카오페이 결제
    class MyWebViewClient extends WebViewClient {

        PaymentApi service = PaymentApi.retrofit.create(PaymentApi.class);

        // 1단계: 결제 준비
        public void readyAndCallPay() {
            String cid = "TC0ONETIME";
            String partner_order_id = "1001";
            String partner_user_id = "gorany";
            String item_name = PRODUCT_NAME;
            Integer quantity = 1;
            Integer total_amount = PRODUCT_PRICE;
            Integer tax_free_amount = 0;
            String approval_url = "https://developers.kakao.com";
            String cancel_url = "https://naver.com";
            String fail_url = "https://google.com";

            service.paymentReady(cid, partner_order_id, partner_user_id, item_name, quantity,
                    total_amount, tax_free_amount, approval_url, cancel_url, fail_url).enqueue(new Callback<PayReady>() {
                @Override
                public void onResponse(Call<PayReady> call, Response<PayReady> response) {
                    PayReady ready = response.body();
                    if(!response.isSuccessful()){
                        Log.i("Retrofit onResponse", "response was not successful");
                    } else {
                        if (ready != null) {
                            String url = ready.getNext_redirect_mobile_url();
                            String tid = ready.getTid();
                            webView.loadUrl(url);
                            tidPin = tid;
                        } else {
                            Log.e("Retrofit onResponse", "no response body");
                        }
                    }
                }

                @Override
                public void onFailure(Call<PayReady> call, Throwable throwable) {
                    Log.e("Debug", "Error: " + throwable.getMessage());
                }
            });
        }

        // 2단계: 결제 승인
        public void approvePayment() {
            String cid = "TC0ONETIME";
            String tid = tidPin;
            String partner_order_id = "1001";
            String partner_user_id = "JustMoveIt";
            String pg_token = pgToken;
            Integer total_amount = PRODUCT_PRICE;

            service.paymentApprove(cid, tid, partner_order_id, partner_user_id, pg_token, total_amount).enqueue(new Callback<PayApprove>() {
                @Override
                public void onResponse(Call<PayApprove> call, Response<PayApprove> response) {
                    if (response.isSuccessful()) {
                        Log.d("PaymentActivity - approvePayment", "onResponse(): successful");

                        // 서버 통신 스레드 - 예매 완료 서버에 요청
                        ConnectionThread thread = new ConnectionThread();
                        Log.d("PaymentActivity", "connection thread start");
                        thread.start();
                        try {
                            thread.join(1000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        /*synchronized (thread) {
                            try {
                                Log.d("PaymentActivity", "main thread waiting");
                                thread.wait();
                            } catch (InterruptedException e) {
                                e.printStackTrace();
                            }
                        }*/

                        Log.d("PaymentActivity", "payment done");
                        Toast.makeText(PaymentActivity.this, "예매됨", Toast.LENGTH_SHORT).show();

                        Intent it = new Intent();
                        it.setClassName("com.example.justmoveit", "com.example.justmoveit.activity.TicketInfoActivity");
                        it.putExtra("ticket", new ReservedTicket(ticket));
                        startActivity(it);

                        finish();
                    } else {
                        Log.e("PaymentActivity - approvePayment", "onResponse(): response is not successful");
                    }
                }

                @Override
                public void onFailure(Call<PayApprove> call, Throwable throwable) {
                    Log.e("PaymentActivity - approvePayment", "onFailure(): " + throwable.getMessage());
                }
            });

        }

        // URL 변경시 발생 이벤트
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            Log.d("Debug", "change url: " + url);

            if (url != null && url.contains("pg_token=")) {
                Log.i("url loading", "pg_token");
                pgToken = url.substring(url.indexOf("pg_token=") + 9);
                this.approvePayment();
            } else if (url != null && url.startsWith("intent://")) {
                Log.i("url loading", "intent");
                try {
                    Intent intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME);
                    startActivity(intent);
                    return true;
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            view.loadUrl(url);
            return false;
        }
    }

    private static class ConnectionThread extends Thread {
        @Override
        public void run() {
            synchronized (this) {
                getReserveTicket();
                Log.d("PaymentActivity", "connection thread end");
                notify();
            }
        }

        private void getReserveTicket() {
            UserTicketApi ticketService = UserTicketApi.retrofit.create(UserTicketApi.class);
            ticketService.reserveTicket(ticket).enqueue(new Callback<Ticket>() {
                @Override
                public void onResponse(Call<Ticket> call, Response<Ticket> response) {
                    Ticket ticket = response.body();
                    if(ticket == null){
                        Log.e("PaymentActivity - reserveTicket", "response body is null");
                        return;
                    }

                    // 성공시 앱 캐시에도 저장
                    // movieSP에 따로 저장할 필요없음. oncreate 때 계속 서버랑 통신하면서 최신 좌석 배치를 얻어올 테니까..
                    // 그냥 유저 예매 내역에만 추가해주면 됨.
                    Gson gson = new Gson();
                    String json = userSP.getString("user_tickets", "");

                    // 기존에 있던 예매 내역 리스트 담고
                    ArrayList<ReservedTicket> reservedTickets = gson.fromJson(json, TypeToken.getParameterized(ArrayList.class, ReservedTicket.class).getType());

                    // 새로운 티켓 추가
                    if(reservedTickets == null){
                        reservedTickets = new ArrayList<>();
                    }
                    reservedTickets.add(new ReservedTicket(ticket));

                    // SP에 덮어쓰기
                    SharedPreferences.Editor editor = userSP.edit();
                    editor.putString("user_tickets", gson.toJson(reservedTickets));
                    editor.apply();
                    Log.d("PaymentActivity - reserveTicket", "putString(reservedTickets) done");
                }

                @Override
                public void onFailure(Call<Ticket> call, Throwable t) {
                    Log.e("PaymentActivity - reserveTicket", "onFailure(): "+t.getMessage());
                }
            });
        }
    }

}
