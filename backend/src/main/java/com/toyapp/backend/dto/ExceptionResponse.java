package com.toyapp.backend.dto;

import lombok.Data;

import java.time.Instant;
import java.util.Collections;
import java.util.List;

@Data
public class ExceptionResponse {
    private List<String> messages;
    private int status;
    private String error;
    private Instant timestamp;

    public ExceptionResponse(List<String> messages, int status, String error ){
        this.messages = messages;
        this.status = status;
        this.error = error;
        this.timestamp = Instant.now();
    }

    public List<String> getMessages() {
        return messages == null ? List.of() : messages;
    }

    public final void setMessages(List<String> messages){
        if(messages == null){
            this.messages = List.of();
        } else {
            this.messages = Collections.unmodifiableList(messages);
        }
    }
}
