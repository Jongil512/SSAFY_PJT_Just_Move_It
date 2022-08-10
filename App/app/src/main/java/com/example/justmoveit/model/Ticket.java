package com.example.justmoveit.model;

import java.io.Serializable;

// 서버 통신 dto
public class Ticket implements Serializable {
    private Long ticketId;
    private Long moviePlayingInfoId;
    private Long movieId;
    private String movieTitle;
    private String ageLimit;
    private String startTime;
    private String endTime;
    private String phoneNumber;
    private String classification;
    private String reservationTime;
    private String seat;
    private String theaterNo, totalCost;

    public Ticket(Long moviePlayingInfoId, Long movieId, String movieTitle, String ageLimit, String startTime, String endTime,
                  String phoneNumber, String classification, String reservationTime, String seat, String theaterNo, String totalCost) {
        this.moviePlayingInfoId = moviePlayingInfoId;
        this.movieId = movieId;
        this.movieTitle = movieTitle;
        this.ageLimit = ageLimit;
        this.startTime = startTime;
        this.endTime = endTime;
        this.phoneNumber = phoneNumber;
        this.classification = classification;
        this.reservationTime = reservationTime;
        this.seat = seat;
        this.theaterNo = theaterNo;
        this.totalCost = totalCost;
    }

    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(Long ticketId) {
        this.ticketId = ticketId;
    }

    public String getTheaterNo() {
        return theaterNo;
    }

    public void setTheaterNo(String theaterNo) {
        this.theaterNo = theaterNo;
    }

    public Long getMoviePlayingInfoId() {
        return moviePlayingInfoId;
    }

    public void setMoviePlayingInfoId(Long moviePlayingInfoId) {
        this.moviePlayingInfoId = moviePlayingInfoId;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getClassification() {
        return classification;
    }

    public void setClassification(String classification) {
        this.classification = classification;
    }

    public String getReservationTime() {
        // 이렇게 옴 2022-08-05T17:30:37.002+00:00 -> 2022-08-05 17:30:37
        String parsed = reservationTime.substring(0, reservationTime.indexOf("."));
        return reservationTime.replace("T", " ");
    }

    public void setReservationTime(String reservationTime) {
        this.reservationTime = reservationTime;
    }

    public String getSeat() {
        return seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public String getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(String totalCost) {
        this.totalCost = totalCost;
    }
}
