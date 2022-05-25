import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {DEFAULT_POSTS_DISPLAY, Post, PostDisplay, PostUtil} from "../../models/post";

@Component({
  selector: 'app-ek-blog',
  styleUrls: ['./ek-blog.component.scss'],
  template: `
    <div id="journal" class="text-left paddsection">
      <div class="container">
        <div class="section-title text-center">
          <h2>journal</h2>
        </div>
      </div>
      <div class="container">
        <div class="journal-block">
          <div class="row">
            <div class="col-lg-4 col-md-6" *ngFor="let post of displayPosts">
              <div class="journal-info">
                <a [routerLink]="['/post', post.id]">
                  <img src="{{post.image}}" class="img-responsive" alt="img">
                </a>
                <div class="journal-txt">
                  <h4><a [routerLink]="['/post', post.id]">{{post.title}}</a></h4>
                  <p class="separator">{{post.introText}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EkBlogComponent implements OnInit {
  displayPosts: PostDisplay[] = DEFAULT_POSTS_DISPLAY;
  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        console.log(posts)
        this.processPosts(posts)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  processPosts(posts: Post[]) {
    this.displayPosts = PostUtil.getPostDisplays(posts);
  }

}
