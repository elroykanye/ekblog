package com.elroykanye.ekblogserver.business.mapper;

import com.elroykanye.ekblogserver.api.dto.PostCommentDto;
import com.elroykanye.ekblogserver.data.entity.PostComment;
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
public interface PostCommentMapper {
    @Mapping(source = "postId", target = "post.id")
    PostComment postCommentDtoToPostComment(PostCommentDto postCommentDto);

    @Mapping(source = "post.id", target = "postId")
    PostCommentDto postCommentToPostCommentDto(PostComment postComment);

    @Mapping(source = "postId", target = "post.id")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updatePostCommentFromPostCommentDto(PostCommentDto postCommentDto, @MappingTarget PostComment postComment);

    default List<Long> postSectionsToPostSectionIds(List<PostSection> postSections) {
        return postSections.stream().map(PostSection::getId).collect(Collectors.toList());
    }
}
