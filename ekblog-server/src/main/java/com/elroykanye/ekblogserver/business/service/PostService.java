package com.elroykanye.ekblogserver.business.service;

import com.elroykanye.ekblogserver.api.dto.PostDto;
import com.elroykanye.ekblogserver.api.response.EkbResponse;
import com.elroykanye.ekblogserver.data.entity.Post;

import java.util.List;

public interface PostService {
    EkbResponse createPost(PostDto postDto);

    List<PostDto> getAllPosts();

    PostDto getPostById(Long id);

    EkbResponse updateById(Long id, PostDto postDto);

    void deletePostById(Long id);

    Post getPostEntity(Long id);
}
