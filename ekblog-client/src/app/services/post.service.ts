import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {defaultPost, Post, PostDisplay, PostUtil} from "../models/post";
import {EkbResponse} from "../models/ekb-response";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(@Inject("EKB_POST_API_URL") private postApiUrl: string, private http: HttpClient) {
  }

  createPost(post: Post): Observable<EkbResponse> {
    return this.http.post<EkbResponse>(this.postApiUrl, post);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postApiUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.postApiUrl}/${id}`);
  }

  updatePostById(id: number, post: Post): Observable<EkbResponse> {
    return this.http.put<EkbResponse>(`${this.postApiUrl}/${id}`, post);
  }

  updatePostImageById(id: number, formData: FormData): Observable<EkbResponse> {
    return this.http.put<EkbResponse>(`${this.postApiUrl}/image/${id}`, formData);
  }

  deletePostById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.postApiUrl}/${id}`);
  }


}

export module PostServiceHelper {
  const TIMEOUT = 250;
  export const loadPost = async (postId: number, postService: PostService): Promise<Post> => {
    let post: Post = defaultPost;
    postService.getPostById(postId).subscribe({
      next: (postRes) => {
        console.log(`Post ${postId} loaded`);
        post = postRes;
      },
      error: (err) => console.log(err)
    });
    return new Promise((resolve) => setTimeout(() => resolve(post), TIMEOUT));
  }


  export const loadPosts = async (postService: PostService, displayPosts?: PostDisplay[]): Promise<Post[]> => {
    let posts: Post[] = [];
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
    return new Promise((resolve, reject) => setTimeout(() => resolve(posts), TIMEOUT));
  }

  export const updatePost = (post: Post, postService: PostService, posts?: Post[]): void => {
    postService.updatePostById(post.id, post).subscribe({
      next: (res) => {
        if (posts) {
          loadPosts(postService).then(r => posts = r);
        }
      },
      error: (err) => console.log(err)
    })
  }

  export const updatePostImage = (id: number, postService: PostService, image: File): void => {
    const formData = new FormData();
    formData.append('image', image);
    console.log(formData.get('image'));
    postService.updatePostImageById(id, formData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err)
    })
  }

  export const addPost = (post: Post, postService: PostService, image: File) => {
    console.log("asd");
    postService.createPost(post).subscribe({
      next: (res) => {
        console.log(res);
        if (image) {
          updatePostImage(res.id, postService, image);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
