package com.ssafy.CommonPJT.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.socket.WebSocketSession;

@Controller
@Log4j2

public class SocketController {
//    @GetMapping("/socket/print")
    @MessageMapping("/print")
    public String chatGET(){
        System.out.println("receive: ");
        //return "socket";
        return null;
    }

    @PostMapping("/socket/postt")
    public String testPost(@RequestBody String msg){
        System.out.println("test post: "+msg);
        return null;
    }
}
