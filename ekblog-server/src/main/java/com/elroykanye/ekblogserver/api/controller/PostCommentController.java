package com.elroykanye.ekblogserver.api.controller;

import com.elroykanye.ekblogserver.api.dto.PostCommentDto;
import com.elroykanye.ekblogserver.api.response.EkbResponse;
import com.elroykanye.ekblogserver.business.service.PostCommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/post/comment")
public class PostCommentController {
    private final PostCommentService postCommentService;

    @PostMapping(value = "/{postId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<EkbResponse> createPostComment(@PathVariable("postId") @NotNull Long postId, @Valid @RequestBody PostCommentDto postCommentDto) {
        return new ResponseEntity<>(postCommentService.createPostComment(postId, postCommentDto), HttpStatus.CREATED);
    }

    @GetMapping(value = "/{postId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<PostCommentDto>> getPostComments(@NotNull @PathVariable Long postId) {
        return ResponseEntity.ok(postCommentService.getPostComments(postId));
    }
}
