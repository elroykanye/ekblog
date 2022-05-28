package com.elroykanye.ekblogserver.exception;

import org.springframework.http.HttpStatus;

public class EkblogException extends RuntimeException {
    HttpStatus status;

    public EkblogException(String message) {

    }

    public EkblogException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public static class NotFoundException extends EkblogException {
        public NotFoundException(String message) {
            super(message, HttpStatus.NOT_FOUND);
        }
    }
}
