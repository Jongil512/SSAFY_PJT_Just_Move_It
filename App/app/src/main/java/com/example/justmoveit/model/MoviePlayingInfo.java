package com.example.justmoveit.model;

import java.io.Serializable;

public class MoviePlayingInfo implements Serializable {
    private Long movieId;
    private String movieTitle;
    private String ageLimit;
    private String startTime;
    private String endTime;
    private int theaterNo;
    private Ticket[] tickets;

    public MoviePlayingInfo(Long movieId, String movieTitle, String ageLimit, String startTime, String endTime, int theaterNo, Ticket[] tickets) {
        this.movieId = movieId;
        this.movieTitle = movieTitle;
        this.ageLimit = ageLimit;
        this.startTime = startTime;
        this.endTime = endTime;
        this.theaterNo = theaterNo;
        this.tickets = tickets;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public String getAgeLimit() {
        return ageLimit;
    }

    public void setAgeLimit(String ageLimit) {
        this.ageLimit = ageLimit;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public int getTheaterNo() {
        return theaterNo;
    }

    public void setTheaterNo(int theaterNo) {
        this.theaterNo = theaterNo;
    }

    public Ticket[] getTickets() {
        return tickets;
    }

    public void setTickets(Ticket[] tickets) {
        this.tickets = tickets;
    }
}