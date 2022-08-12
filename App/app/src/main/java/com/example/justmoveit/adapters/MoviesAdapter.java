package com.example.justmoveit.adapters;

import android.content.Context;
import android.content.Intent;
import android.text.Html;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
//import android.widget.RatingBar;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.justmoveit.R;
import com.example.justmoveit.activity.MainActivity;
import com.example.justmoveit.activity.MovieInfoActivity;
import com.example.justmoveit.activity.SeatActivity;
import com.example.justmoveit.model.Movie;
import com.makeramen.roundedimageview.RoundedImageView;
import com.squareup.picasso.Picasso;

import java.util.List;

public class MoviesAdapter extends RecyclerView.Adapter<MoviesAdapter.MovieViewHolder> {
    private String rankBy;
    private final List<Movie> movieList;
    Context context;

    public MoviesAdapter(List<Movie> movies, String rankBy) {
        this.movieList = movies;
        this.rankBy = rankBy;
    }

    @NonNull
    @Override
    public MovieViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new MovieViewHolder(
            LayoutInflater.from(parent.getContext()).inflate(
                R.layout.item_container_movie, parent, false
            )
        );
    }

    @Override
    public void onAttachedToRecyclerView(RecyclerView recyclerView) {
        super.onAttachedToRecyclerView(recyclerView);
        context = recyclerView.getContext();
    }

    @Override
    public void onBindViewHolder(@NonNull MovieViewHolder holder, int position) {
        int index = position % movieList.size();

        holder.ranking.setText((index+1)+"위");
        holder.setMovie(movieList.get(index));
        // 홀더 아이템 클릭시 영화 상세 페이지로 이동
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context.getApplicationContext(), MovieInfoActivity.class);
                intent.putExtra("rankBy", rankBy);
                intent.putExtra("movie_id", movieList.get(index).getMoviePlayingInfoByIndex(0).getMovieId()+"");
                context.startActivity(intent);
            }
        });
        holder.reserveBtn.setOnClickListener(view -> {
            Intent it = new Intent();
            it.setClassName("com.example.justmoveit", "com.example.justmoveit.activity.SeatActivity");
            context.startActivity(it);
        });
    }

    @Override
    public int getItemCount() {
        return Integer.MAX_VALUE;
    }

    static class MovieViewHolder extends RecyclerView.ViewHolder {
        private final RoundedImageView imagePoster, innerShadow;
        private final TextView textName, ranking, starSymbol, totalCust, ratingBarNum;
        private final Button reserveBtn;

        // 레이아웃과 연결
        public MovieViewHolder(@NonNull View view) {
            super(view);
            imagePoster = view.findViewById(R.id.image_poster);
            innerShadow = view.findViewById(R.id.inner_shadow);
            textName = view.findViewById(R.id.textName);
            starSymbol = view.findViewById(R.id.star_symbol);
            totalCust = view.findViewById(R.id.total_cust);
            ranking = view.findViewById(R.id.ranking);
            ratingBarNum = view.findViewById(R.id.ratingBarNum);
            reserveBtn = view.findViewById(R.id.reserve_button);
        }

        // 값 적용
        void setMovie(Movie movie) {
            Picasso.get().load(movie.getImg()).into(imagePoster);
            Picasso.get().load(R.drawable.inner_shadow).into(innerShadow);
            textName.setText(movie.getTitle());
            totalCust.setText("누적 관객 " + Long.parseLong(movie.getTotalCustomer())/10000 +"만명");
            starSymbol.setText(Html.fromHtml("&#9733;"));
            ratingBarNum.setText((movie.getRating()));
        }
    }

}
