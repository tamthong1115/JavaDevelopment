package com.toyapp.backend.dto.auth;

public class JwtResponse {
    private String token;

    private long expirationTime;

    public JwtResponse(String token, long expirationTime) {
        this.token = token;
        this.expirationTime = expirationTime;
    }

    public String getToken() {
        return token;
    }

    public long getExpirationTime() {
        return expirationTime;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setExpirationTime(long expirationTime) {
        this.expirationTime = expirationTime;
    }

}

