package com.elroykanye.ekblogserver.business.service;

import com.elroykanye.ekblogserver.api.dto.ContactDto;

import java.util.List;

public interface ContactService {

    ContactDto createContact(ContactDto contactDto);

    List<ContactDto> getAllContacts();

    void deleteContact(Long id);
}
