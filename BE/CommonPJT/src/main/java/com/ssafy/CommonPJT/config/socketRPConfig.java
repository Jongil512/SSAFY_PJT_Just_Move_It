package com.ssafy.CommonPJT.config;

import com.ssafy.CommonPJT.handler.HandlerForRP;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@RequiredArgsConstructor
@EnableWebSocket
public class socketRPConfig implements WebSocketConfigurer {
    private final HandlerForRP handlerForRP;
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(handlerForRP, "/rsbpserver").setAllowedOrigins("*");
        registry.addHandler(handlerForRP, "/serverrsbp").setAllowedOrigins("*");
    }
}
