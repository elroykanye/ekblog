package com.elroykanye.ekblogserver.api.dto;

import java.io.Serializable;
import java.util.List;

public record PostDto(Long id, String imageUrl, String title, Integer numberOfComments,
                      List<PostSectionDto> sections) implements Serializable {
}
