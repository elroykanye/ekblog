package com.elroykanye.ekblogserver.data.repository;

import com.elroykanye.ekblogserver.data.entity.PostSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PostSectionRepository extends JpaRepository<PostSection, Long> {
}
