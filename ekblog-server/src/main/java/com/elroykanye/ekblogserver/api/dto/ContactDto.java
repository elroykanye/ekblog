package com.elroykanye.ekblogserver.api.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

public record ContactDto(
        Long id,
        @NotNull String name,
        @NotNull String email,
        @NotNull String subject,
        @NotNull String message
) implements Serializable {
}
