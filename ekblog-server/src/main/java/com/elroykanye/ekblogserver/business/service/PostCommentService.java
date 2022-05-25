package com.elroykanye.ekblogserver.business.service;


import com.elroykanye.ekblogserver.api.dto.PostCommentDto;
import com.elroykanye.ekblogserver.api.response.EkbResponse;

import java.util.List;

public interface PostCommentService {
    List<PostCommentDto> getPostComments(Long postId);

    EkbResponse createPostComment(Long postId, PostCommentDto postCommentDto);
}
