import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostService, PostServiceHelper} from "../../services/post.service";

@Component({
  selector: 'app-adm-posts',
  styleUrls: ['./adm-posts.component.scss'],
  template: `
    <section id="adm-posts">
      <div class="py-5">
        <div class="container">
          <div class="p-3 d-flex ">
            Welcome Vince...or not
            <span class="spacer"></span>
            <button routerLink="/adm-add-post" class="btn align-self-end">Add Post</button>
          </div>
          <div class="row p-3" *ngFor="let post of posts">
            <div class="col-md-10">
              <span class="h5">{{post.title}}</span>
              <div>
                <span class="">{{post.sections.length}}</span><br>
                <span class="">{{post.createdAt}}</span><br>
                <span>{{post.draft || post.draft == null ? 'DRAFT' : 'PUBLISHED'}}</span>
              </div>
            </div>
            <div class="col-md-2">
              <button (click)="openEditPostAction(post)" class="btn btn-primary w-100">Edit</button>
              <button (click)="flipDraftPostAction(post)" class="btn btn-danger w-100">Draft</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AdmPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    PostServiceHelper.loadPosts(this.postService).then(r => {
      this.posts = r;
    });
  }


  openEditPostAction(post: Post) {

  }

  flipDraftPostAction(post: Post) {
    post.draft = !post.draft;
    PostServiceHelper.updatePost(post, this.postService, this.posts);
  }
}
