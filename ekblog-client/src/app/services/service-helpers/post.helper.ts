import {Post, PostDisplay, PostUtil} from "../../models/post";
import {PostService} from "../post.service";

export const loadPosts = (posts: Post[], postService: PostService, displayPosts?: PostDisplay[]): void => {
  postService.getAllPosts().subscribe({
    next: (postsRes) => {
      posts = postsRes;
      console.log(posts);
      if (displayPosts) {
        displayPosts = PostUtil.getPostDisplays(posts);
      }
    },
    error: (err) => {
      console.log(err);
    }
  });
}

export const updatePost = (post: Post, postService: PostService, posts?: Post[],): void => {
  postService.updatePostById(post.id, post).subscribe({
    next: (res) => {
      if (posts) {
        loadPosts(posts, postService);
      }
    },
    error: (err) => console.log(err)
  })
}

export const addPost = (post: Post, postService: PostService) => {
  postService.createPost(post).subscribe({
    next: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err);
    }
  })
}
