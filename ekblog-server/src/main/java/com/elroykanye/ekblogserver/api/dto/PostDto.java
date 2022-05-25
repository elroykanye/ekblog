package com.elroykanye.ekblogserver.api.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public record PostDto(Long id, String imageUrl, String title, Integer numberOfComments, List<Long> postSectionIds) implements Serializable {
}
