package com.elroykanye.ekblogserver.business.mapper;

import com.elroykanye.ekblogserver.api.dto.PostDto;
import com.elroykanye.ekblogserver.data.entity.Post;
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
public interface PostMapper {
    Post postDtoToPost(PostDto postDto);

    @Mapping(target = "postSectionIds", expression = "java(postSectionsToPostSectionIds(post.getPostSections()))")
    @Mapping(target = "numberOfComments", expression = "java(post.getComments().size())")
    PostDto postToPostDto(Post post);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updatePostFromPostDto(PostDto postDto, @MappingTarget Post post);

    default List<Long> postSectionsToPostSectionIds(List<PostSection> postSections) {
        return postSections.stream().map(PostSection::getId).collect(Collectors.toList());
    }
}
