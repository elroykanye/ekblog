import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ek-blog',
  templateUrl: './ek-blog.component.html',
  styleUrls: ['./ek-blog.component.scss']
})
export class EkBlogComponent implements OnInit {
  homePosts: {image: string; title: string; introText: string}[] = [
    {
      image: "assets/img/blog-post-1.jpg",
      title: "How to get started with Angular",
      introText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis..."
    },
    {
      image: "assets/img/blog-post-1.jpg",
      title: "How to get started with Angular",
      introText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis..."
    },
    {
      image: "assets/img/blog-post-1.jpg",
      title: "How to get started with Angular",
      introText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis..."
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
