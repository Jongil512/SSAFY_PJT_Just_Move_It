package com.ssafy.CommonPJT.config;

import com.ssafy.CommonPJT.handler.HandlerForRE;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@RequiredArgsConstructor
@EnableWebSocket
public class socketREConfig implements WebSocketConfigurer {
    private final HandlerForRE handlerForRE;
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(handlerForRE, "/reactserver").setAllowedOrigins("*");
        registry.addHandler(handlerForRE, "/serverreact").setAllowedOrigins("*");
    }
}
