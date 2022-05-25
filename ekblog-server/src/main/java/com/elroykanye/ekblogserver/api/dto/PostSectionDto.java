package com.elroykanye.ekblogserver.api.dto;

import com.elroykanye.ekblogserver.data.SectionType;
import lombok.Data;

import java.io.Serializable;

public record PostSectionDto(Long id, Integer order, String content, SectionType sectionType, Long postId)
        implements Serializable { }
