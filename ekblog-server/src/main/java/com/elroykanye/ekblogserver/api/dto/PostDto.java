package com.elroykanye.ekblogserver.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

public record PostDto(
        Long id,
        String imageUrl,
        String title,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
        LocalDateTime createdAt,
        @NotEmpty(message = "Post must have at least 1 section")
        List<PostSectionDto> sections,
        Integer numberOfComments
) implements Serializable {
}
