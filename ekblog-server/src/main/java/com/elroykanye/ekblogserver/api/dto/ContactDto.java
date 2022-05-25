package com.elroykanye.ekblogserver.api.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public record ContactDto(Long id, String name, String email, String subject, String message) implements Serializable {
}
