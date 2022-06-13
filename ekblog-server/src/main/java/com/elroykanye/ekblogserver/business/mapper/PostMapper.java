package com.elroykanye.ekblogserver.business.mapper;

import com.elroykanye.ekblogserver.api.dto.PostDto;
import com.elroykanye.ekblogserver.data.entity.Post;
import org.mapstruct.BeanMapping;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring", uses = {PostSectionMapper.class}, injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface PostMapper {
    @Mapping(target = "image", ignore = true)
    Post postDtoToPost(PostDto postDto);

    @Mapping(source = "postSections", target = "sections")
    @Mapping(target = "image", ignore = true)
    @Mapping(target = "numberOfComments", expression = "java(post.getComments().size())")
    PostDto postToPostDto(Post post);


    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updatePostFromPostDto(PostDto postDto, @MappingTarget Post post);
}
