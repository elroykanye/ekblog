package com.elroykanye.ekblogserver.data.repository;

import com.elroykanye.ekblogserver.data.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
