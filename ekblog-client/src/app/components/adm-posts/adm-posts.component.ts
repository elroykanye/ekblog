import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";

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
              <span class="h4">{{post.title}}</span>
              <div>
                <span class="">{{post.sections.length}}</span><br>
                <span class="">{{post.createdAt}}</span><br>
              </div>
            </div>
            <div class="col-md-2">
              <button class="btn btn-primary w-100">Edit</button>
              <button class="btn btn-danger w-100">Delete</button>
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
    this.postService.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
