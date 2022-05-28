package com.elroykanye.ekblogserver.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

public class EkblogAdvisor extends ResponseEntityExceptionHandler {
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String message = error.getDefaultMessage();
            errors.put(fieldName, message);
        });
        return new ResponseEntity<>(
                ExceptionBody.buildExceptionBody(
                        "Validation failed for field(s) in request",
                        request, HttpStatus.BAD_REQUEST, errors),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(value = {EkblogException.NotFoundException.class})
    protected ResponseEntity<ExceptionBody> handleNotFoundException(EkblogException.NotFoundException ex, WebRequest request) {
        return getExceptionEntity(ex, request, ex.status, new HashMap<>());
    }

    private ResponseEntity<ExceptionBody> getExceptionEntity(RuntimeException ex, WebRequest webRequest, HttpStatus status, Map<String, String> messages) {
        ExceptionBody exceptionBody = ExceptionBody.buildExceptionBody(ex.getMessage(), webRequest, status, messages);
        return new ResponseEntity<>(exceptionBody, status);
    }

    private record ExceptionBody(
            @JsonProperty("message") String message,
            @JsonProperty("status") HttpStatus status,
            @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
            @JsonProperty("timestamp") LocalDateTime timestamp,
            @JsonProperty("errors") Map<String, String> errors,
            @JsonProperty("path") String path
    ) implements Serializable {
        public static ExceptionBody buildExceptionBody(String message, WebRequest webRequest, HttpStatus httpStatus, Map<String, String> errors) {
            return new ExceptionBody(message, httpStatus, LocalDateTime.now(), errors, webRequest.getContextPath());
        }
    }
}
