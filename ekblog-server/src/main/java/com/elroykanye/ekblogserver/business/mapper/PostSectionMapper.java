package com.elroykanye.ekblogserver.business.mapper;

import com.elroykanye.ekblogserver.api.dto.PostSectionDto;
import com.elroykanye.ekblogserver.data.entity.PostSection;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface PostSectionMapper {
    @Mapping(source = "postId", target = "post.id")
    PostSection postSectionDtoToPostSection(PostSectionDto postSectionDto);

    @Mapping(source = "post.id", target = "postId")
    PostSectionDto postSectionToPostSectionDto(PostSection postSection);

    @Mapping(source = "postId", target = "post.id")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updatePostSectionFromPostSectionDto(PostSectionDto postSectionDto, @MappingTarget PostSection postSection);

    default List<Long> postSectionsToPostSectionIds(List<PostSection> postSections) {
        return postSections.stream().map(PostSection::getId).collect(Collectors.toList());
    }
}
