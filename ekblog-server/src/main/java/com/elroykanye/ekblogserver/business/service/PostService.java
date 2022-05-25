package com.elroykanye.ekblogserver.business.service;

import com.elroykanye.ekblogserver.api.dto.PostDto;
import com.elroykanye.ekblogserver.api.response.EkbResponse;

import java.util.List;

public interface PostService {
    EkbResponse createPost(PostDto postDto);

    List<PostDto> getAllPosts();

    PostDto getPostById(Long id);

    void deletePostById(Long id);
}
