import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostComment} from "../models/post-comment";
import {EkbResponse} from "../models/ekb-response";

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  constructor(@Inject("EKB_POST_COMMENT_API_URL") private postCommentApiUrl: string, private http: HttpClient) {
  }

  getPostComments(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${this.postCommentApiUrl}/${postId}`);
  }

  addPostComment(postComment: PostComment): Observable<EkbResponse> {
    return this.http.post<EkbResponse>(`${this.postCommentApiUrl}/${postComment.postId}`, postComment);
  }

}
