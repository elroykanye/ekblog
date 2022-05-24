package com.elroykanye.ekblogserver.business.mapper;


@Mapper(componentModel = "spring", implementationPackage="<PACKAGE_NAME>.impl")
public interface PostMapper {

	PostDto mapPostToDto(Post post);

	Post mapDtoToPost(PostDto postDto);

}
