package com.elroykanye.ekblogserver.business.service.impl;

import com.elroykanye.ekblogserver.api.dto.PostCommentDto;
import com.elroykanye.ekblogserver.api.response.EkbResponse;
import com.elroykanye.ekblogserver.business.mapper.PostCommentMapper;
import com.elroykanye.ekblogserver.business.service.PostCommentService;
import com.elroykanye.ekblogserver.business.service.PostService;
import com.elroykanye.ekblogserver.data.entity.Post;
import com.elroykanye.ekblogserver.data.entity.PostComment;
import com.elroykanye.ekblogserver.data.repository.PostCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@Service
public class PostCommentServiceImpl implements PostCommentService {
    private final PostCommentRepository postCommentRepository;
    private final PostCommentMapper postCommentMapper;
    private final PostService postService;

    @Override
    public List<PostCommentDto> getPostComments(Long postId) {
        Post post = postService.getPostEntity(postId);
        return postCommentRepository.findAllByPost(post)
                .stream().map(postCommentMapper::postCommentToPostCommentDto).toList();
    }

    @Override
    public EkbResponse createPostComment(Long postId, @Valid PostCommentDto postCommentDto) {
        PostComment postComment = postCommentMapper.postCommentDtoToPostComment(postCommentDto);
        Post post = postService.getPostEntity(postId);
        postComment.setId(null);
        postComment.setPost(post);
        postComment.setCreatedAt(LocalDateTime.now());
        System.out.println(postComment.getAuthorName());
        return new EkbResponse(postCommentRepository.save(postComment).getId(), "Post comment created successfully");
    }
}
