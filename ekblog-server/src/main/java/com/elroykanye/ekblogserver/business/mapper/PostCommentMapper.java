package com.elroykanye.ekblogserver.business.mapper;


@Mapper(componentModel = "spring", implementationPackage="<PACKAGE_NAME>.impl")
public interface PostCommentMapper {

	PostCommentDto mapPostCommentToDto(PostComment postcomment);

	PostComment mapDtoToPostComment(PostCommentDto postcommentDto);

}
