import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-adm-posts',
  styleUrls: ['./adm-posts.component.scss'],
  template: `
    <section id="adm-posts">
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-10">
              <span class="h4">title</span>
              <p>
                date
              </p>
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

  constructor() { }

  ngOnInit(): void {
  }

}
