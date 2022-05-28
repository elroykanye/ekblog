import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";
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

  deletePostById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.postApiUrl}/${id}`);
  }
}
