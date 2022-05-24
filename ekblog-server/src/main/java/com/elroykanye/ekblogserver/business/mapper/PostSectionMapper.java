package com.elroykanye.ekblogserver.business.mapper;


@Mapper(componentModel = "spring", implementationPackage="<PACKAGE_NAME>.impl")
public interface PostSectionMapper {

	PostSectionDto mapPostSectionToDto(PostSection postsection);

	PostSection mapDtoToPostSection(PostSectionDto postsectionDto);

}
