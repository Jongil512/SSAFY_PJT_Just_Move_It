package com.ssafy.CommonPJT.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    private String isAdmin;

    @Column(length = 25)
    private String phoneNumber;

    @Column(length = 15)
    private String username;

    private String profileImg;
}