import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EkHomeComponent} from "./components/ek-home/ek-home.component";
import {EkContactComponent} from "./components/ek-contact/ek-contact.component";
import {EkBlogComponent} from "./components/ek-blog/ek-blog.component";
import {EkPortfolioComponent} from "./components/ek-portfolio/ek-portfolio.component";
import {EkAboutComponent} from "./components/ek-about/ek-about.component";
import {EkBlogPostComponent} from "./components/ek-blog-post/ek-blog-post.component";
import {AdmPostsComponent} from "./components/adm-posts/adm-posts.component";
import {AdmAddPostComponent} from "./components/adm-add-post/adm-add-post.component";

const routes: Routes = [
  {
    path: '',
    component: EkHomeComponent,
    data: {
      animation: 'openClosePage'
    }
  },
  {path: 'about', component: EkAboutComponent},
  {path: 'contact', component: EkContactComponent},
  {
    path: 'blog',
    component: EkBlogComponent,
    children: []
  },
  {path: 'post/:id', component: EkBlogPostComponent},
  {path: 'portfolio', component: EkPortfolioComponent},
  {path: 'adm-posts', component: AdmPostsComponent},
  {path: 'adm-add-post', component: AdmAddPostComponent},
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
