package com.ssafy.CommonPJT.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Log4j2

public class SocketRPController {
    @GetMapping("/rsbpserver")
    public String chatGET(){
        log.info("@SocketController, chat GET()");
        //return "socket";
        return null;
    }

    @GetMapping("/serverrsbp")
    public String chatGET2(){
        log.info("@SocketController, chat GET()");
        //return "socket";
        return null;
    }
}
