import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/post";
import {PostService, PostServiceHelper} from "../../services/post.service";

@Component({
  selector: 'app-adm-add-post',
  templateUrl: './adm-add-post.component.html',
  styleUrls: ['./adm-add-post.component.scss']
})
export class AdmAddPostComponent implements OnInit {

  postUpdate: boolean;
  addPostForm: FormGroup;
  postImage!: File;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postUpdate = false
    this.addPostForm = fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      draft: [''],
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
    // TODO get photo from the form
    const post: Post = {
      id: -1,
      title: this.addPostForm.get('title')?.value,
      image: [],
      draft: !!this.addPostForm.get('draft')?.value,
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
    PostServiceHelper.addPost(post, this.postService, this.postImage);
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

  onFileChanged($event: Event) {
    if ($event.target instanceof HTMLInputElement) {
      if ($event.target.files) {
        this.postImage = $event.target.files[0];
        console.log(this.postImage)
      }
    }
  }
}
