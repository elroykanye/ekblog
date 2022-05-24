package com.elroykanye.ekblogserver.business.mapper;


@Mapper(componentModel = "spring", implementationPackage="<PACKAGE_NAME>.impl")
public interface ContactMapper {

	ContactDto mapContactToDto(Contact contact);

	Contact mapDtoToContact(ContactDto contactDto);

}
