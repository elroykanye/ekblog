package com.elroykanye.ekblogserver.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

public record PostDto(
        @JsonProperty(value = "id") Long id,
        @JsonProperty(value = "image") String image,
        @JsonProperty(value = "title") String title,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
        LocalDateTime createdAt,
        @JsonProperty(value = "draft") @NotNull Boolean draft,
        @NotEmpty(message = "Post must have at least 1 section")
        List<PostSectionDto> sections,
        Integer numberOfComments
) implements Serializable {
}
