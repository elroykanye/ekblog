package com.elroykanye.ekblogserver.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;

public record PostCommentDto(
        @JsonProperty(value = "id") Long id,
        @NotNull @JsonProperty(value = "content") String content,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
        @JsonProperty(value = "createdAt") LocalDateTime createdAt,
        @NotNull @JsonProperty(value = "authorName") String authorName,
        @JsonProperty(value = "authorEmail") String authorEmail,
        @JsonProperty(value = "postId") Long postId) implements Serializable {
}
