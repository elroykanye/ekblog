package com.elroykanye.ekblogserver.data.repository;

import com.elroykanye.ekblogserver.data.entity.Post;
import com.elroykanye.ekblogserver.data.entity.PostComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostCommentRepository extends JpaRepository<PostComment, Long> {
    List<PostComment> findAllByPost(Post post);
}
