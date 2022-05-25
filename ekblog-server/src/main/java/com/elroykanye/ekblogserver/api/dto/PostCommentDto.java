package com.elroykanye.ekblogserver.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public record PostCommentDto(
        @JsonProperty(value = "id") Long id,
        @JsonProperty(value = "comment") String comment,
        @JsonProperty(value = "createdAt") LocalDateTime createdAt,
        @JsonProperty(value = "authorName") String authorName,
        @JsonProperty(value = "postId") Long postId) implements Serializable {
}
