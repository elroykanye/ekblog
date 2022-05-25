package com.elroykanye.ekblogserver.data.repository;

import com.elroykanye.ekblogserver.data.entity.PostComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PostCommentRepository extends JpaRepository<PostComment, Long> {
}
