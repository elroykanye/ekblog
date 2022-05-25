import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EkHomeComponent} from "./components/ek-home/ek-home.component";
import {EkContactComponent} from "./components/ek-contact/ek-contact.component";
import {EkBlogComponent} from "./components/ek-blog/ek-blog.component";
import {EkPortfolioComponent} from "./components/ek-portfolio/ek-portfolio.component";
import {EkAboutComponent} from "./components/ek-about/ek-about.component";

const routes: Routes = [
  {path: '', component: EkHomeComponent},
  {path: 'about', component: EkAboutComponent},
  {path: 'contact', component: EkContactComponent},
  {path: 'blog', component: EkBlogComponent},
  {path: 'portfolio', component: EkPortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
