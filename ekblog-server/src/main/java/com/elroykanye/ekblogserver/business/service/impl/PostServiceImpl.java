package com.elroykanye.ekblogserver.business.service.impl;
import com.elroykanye.ekblogserver.api.dto.PostDto;
import com.elroykanye.ekblogserver.api.response.EkbResponse;
import com.elroykanye.ekblogserver.business.mapper.PostMapper;
import com.elroykanye.ekblogserver.business.mapper.PostSectionMapper;
import com.elroykanye.ekblogserver.business.service.PostService;
import com.elroykanye.ekblogserver.data.entity.Post;
import com.elroykanye.ekblogserver.data.entity.PostSection;
import com.elroykanye.ekblogserver.data.repository.PostRepository;
import com.elroykanye.ekblogserver.data.repository.PostSectionRepository;
import com.elroykanye.ekblogserver.exception.advice.EkblogException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@Service
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final PostSectionRepository postSectionRepository;
    private final PostMapper postMapper;
    private final PostSectionMapper postSectionMapper;

    @Override
    public EkbResponse createPost(PostDto postDto) {
        Post post = postMapper.postDtoToPost(postDto);
        post.setId(null);
        post.setCreatedAt(LocalDateTime.now());

        post = postRepository.save(post);

        Post finalPost = post;
        postDto.sections().forEach(postSectionDto -> {
            PostSection postSection = postSectionMapper.postSectionDtoToPostSection(postSectionDto);
            postSection.setPost(finalPost);
            postSection.setId(null);
            postSectionRepository.save(postSection);
        });
        return new EkbResponse(post.getId(), "Post created successfully");
    }

    @Override
    public List<PostDto> getAllPosts() {
        return postRepository.findAll().stream().map(postMapper::postToPostDto).toList();
    }

    @Override
    public PostDto getPostById(Long id) {
        return postMapper.postToPostDto(getPostEntity(id));
    }

    @Override
    public void deletePostById(Long id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
        }
        throw new EkblogException.NotFoundException("Post with id " + id + " not found");
    }

    public Post getPostEntity(Long id) {
        return postRepository.findById(id).orElseThrow(() -> {
            throw new EkblogException.NotFoundException("Post with id " + id + " not found");
        });
    }


}
