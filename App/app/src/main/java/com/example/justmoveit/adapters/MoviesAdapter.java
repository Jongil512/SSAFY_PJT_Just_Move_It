package com.example.justmoveit.adapters;

import static com.example.justmoveit.activity.LoadingActivity.movieSP;

import android.content.Context;
import android.content.Intent;
import android.text.Html;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.justmoveit.R;
import com.example.justmoveit.activity.MovieInfoActivity;
import com.example.justmoveit.model.Movie;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.makeramen.roundedimageview.RoundedImageView;
import com.squareup.picasso.Picasso;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class MoviesAdapter extends RecyclerView.Adapter<MoviesAdapter.MovieViewHolder> {
    private final List<Movie> movies;    // 영화 순서
    private Context context;
    private final ArrayList<Movie> movieList; // general_ranking 영화 리스트

    public MoviesAdapter(List<Movie> movies) {
        this.movies = movies;
        Gson gson = new Gson();
        movieList = gson.fromJson(movieSP.getString("general_ranking", ""),
                TypeToken.getParameterized(ArrayList.class, Movie.class).getType());
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
        int index = position % movies.size();

        holder.ranking.setText((index+1)+"위");
        holder.setMovie(movies.get(index));
        // 홀더 아이템 클릭시 영화 상세 페이지로 이동
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context.getApplicationContext(), MovieInfoActivity.class);
                intent.putExtra("movie_code", movies.get(index).getMovieCode());
                context.startActivity(intent);
            }
        });
        holder.reserveBtn.setOnClickListener(view -> {
            Intent intent = new Intent(context.getApplicationContext(), MovieInfoActivity.class);
            intent.putExtra("movie_code", movies.get(index).getMovieCode());
            context.startActivity(intent);
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
