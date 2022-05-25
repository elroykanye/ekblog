package com.elroykanye.ekblogserver.business.service.impl;
import com.elroykanye.ekblogserver.api.dto.ContactDto;
import com.elroykanye.ekblogserver.business.mapper.ContactMapper;
import com.elroykanye.ekblogserver.business.service.ContactService;
import com.elroykanye.ekblogserver.data.entity.Contact;
import com.elroykanye.ekblogserver.data.repository.ContactRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ContactServiceImpl implements ContactService {
    private final ContactRepository contactRepository;
    private final ContactMapper contactMapper;
    @Override
    public ContactDto createContact(ContactDto contactDto) {
        Contact contact = contactMapper.contactDtoToContact(contactDto);
        contact.setId(null);

        return contactMapper.contactToContactDto(contactRepository.save(contact));
    }

    @Override
    public List<ContactDto> getAllContacts() {
        return contactRepository.findAll().stream().map(contactMapper::contactToContactDto).toList();
    }

    @Override
    public void deleteContact(Long id) {
        if (contactRepository.existsById(id)) {
            contactRepository.deleteById(id);
        }
    }
}
