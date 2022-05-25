import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {PostComment} from "../../models/post-comment";
import {PostCommentService} from "../../services/post-comment.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EkbResponse} from "../../models/ekb-response";

@Component({
  selector: 'app-ek-blog-post',
  templateUrl: './ek-blog-post.component.html',
  styleUrls: ['./ek-blog-post.component.scss']
})
export class EkBlogPostComponent implements OnInit {

  post: Post = {id: 0, title: '', imageUrl: '', sections: []};
  comments: PostComment[] = [];
  commentForm: FormGroup;

  constructor(private route: ActivatedRoute, private postService: PostService, private postCommentService: PostCommentService) {
    this.commentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      website: new FormControl(''),
      content: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postId = Number(routeParams.get('id'));
    this.loadPost(postId);
    this.loadComments(postId);
  }

  loadPost(postId: number): void {
    this.postService.getPostById(postId).subscribe({
      next: (post: Post) => {
        this.post = post;
        console.log(this.post.sections[0].sectionType.toString())
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadComments(postId: number): void {
    this.postCommentService.getPostComments(postId).subscribe({
      next: (comments: PostComment[]) => {
        this.comments = comments;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addComment(comment: PostComment): void {

    console.log(comment)
    this.postCommentService.addPostComment(comment).subscribe({
      next: (res: EkbResponse) => {
        this.comments.push(comment);
        this.loadComments(comment.postId);
        console.log(res)
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  addCommentAction() {
    const comment: PostComment = {
      id: -1,
      postId: this.post.id,
      content: this.commentForm.get('content')?.value,
      authorName: this.commentForm.get('name')?.value,
      authorEmail: this.commentForm.get('email')?.value,
    }
    this.addComment(comment);
  }
}
