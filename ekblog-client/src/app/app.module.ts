import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EkHomeComponent } from './components/ek-home/ek-home.component';
import { EkBlogComponent } from './components/ek-blog/ek-blog.component';
import { EkBlogPostComponent } from './components/ek-blog-post/ek-blog-post.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxTypedJsModule} from "ngx-typed-js";
import {SwiperModule} from "swiper/angular";
import {ReactiveFormsModule} from "@angular/forms";
import { EkContactComponent } from './components/ek-contact/ek-contact.component';
import { EkPortfolioComponent } from './components/ek-portfolio/ek-portfolio.component';
import { EkHeaderComponent } from './components/ek-header/ek-header.component';
import { EkFooterComponent } from './components/ek-footer/ek-footer.component';
import { EkAboutComponent } from './components/ek-about/ek-about.component';

@NgModule({
  declarations: [
    AppComponent,
    EkHomeComponent,
    EkBlogComponent,
    EkBlogPostComponent,
    EkContactComponent,
    EkPortfolioComponent,
    EkHeaderComponent,
    EkFooterComponent,
    EkAboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxTypedJsModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
