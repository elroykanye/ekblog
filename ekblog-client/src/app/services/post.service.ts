import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(@Inject("EKB_POST_API_URL") private postApiUrl: string, private http: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postApiUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.postApiUrl}/${id}`);
  }
}
