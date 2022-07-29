package com.ssafy.CommonPJT.domain;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
public class Ticket {

    @Id
    @GeneratedValue
    @Column(name = "ticket_id")
    private Long id;

    private String phoneNumber;

    private String seat;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "movieplayinginfo_id")
    private MoviePlayingInfo moviePlayingInfo;
}