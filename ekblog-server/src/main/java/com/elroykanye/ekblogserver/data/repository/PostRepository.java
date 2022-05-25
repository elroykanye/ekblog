package com.elroykanye.ekblogserver.data.repository;

import com.elroykanye.ekblogserver.data.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
