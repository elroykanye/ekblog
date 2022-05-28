import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-adm-add-post',
  templateUrl: './adm-add-post.component.html',
  styleUrls: ['./adm-add-post.component.scss']
})
export class AdmAddPostComponent implements OnInit {

  postUpdate: boolean;
  addPostForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postUpdate = false
    this.addPostForm = fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      sections: fb.array([
        fb.group({
          id: [-1],
          order: [0],
          content: ['', Validators.required],
          sectionType: ['', Validators.required]
        })
      ])
    });

  }

  get sections() {
    return this.addPostForm.get('sections') as FormArray;
  }

  ngOnInit(): void {
  }

  addPostAction() {
    const post: Post = {
      id: -1,
      title: this.addPostForm.get('title')?.value,
      imageUrl: this.addPostForm.get('image')?.value,
      sections: []
    }
    this.sections.controls.forEach(sectionControl => {
      const section: any = {
        id: sectionControl.get('id')?.value,
        order: sectionControl.get('order')?.value,
        content: sectionControl.get('content')?.value,
        sectionType: sectionControl.get('sectionType')?.value ? 'PARAGRAPH' : 'BLOCKQUOTE'
      }
      post.sections.push(section)
    });
    console.log(post)
    this.postService.createPost(post).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updatePostAction() {

  }

  addSectionAction() {
    const sectionForm = this.fb.group({
      id: [-1],
      order: [this.sections.length],
      content: ['', Validators.required],
      sectionType: ['', Validators.required]
    });
    this.sections.push(sectionForm);
  }
}
