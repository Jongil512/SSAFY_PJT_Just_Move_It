package com.ssafy.CommonPJT.handler;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
@Log4j2
public class Handler extends TextWebSocketHandler {
    private static WebSocketSession raspberry;

    /* Client가 접속 시 호출되는 메서드 */
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("connected");
        this.raspberry = session;
        log.info(session + " 클라이언트 접속");
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        System.out.println("connected 2");
        String payload = message.getPayload();
        System.out.println(payload);
        log.info("payload : " + payload);
        TextMessage msg = new TextMessage("받았음!!");
        session.sendMessage(msg);
    }

    /* Client가 접속 해제 시 호출되는 메서드드 */
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("disconnected");
        this.raspberry = null;
        log.info(session + " 클라이언트 접속 해제");
    }
}
