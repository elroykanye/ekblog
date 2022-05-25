import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ek-header',
  styleUrls: ['./ek-header.component.scss'],
  template: `
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center justify-content-between">

        <h1 class="logo">
          <a href="#">Elroy's Blog</a>
        </h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li *ngFor="let navItem of navItems">
              <a class="nav-link scrollto {{navItem.active ? 'active': ''}}" [routerLink]="[navItem.link]" [fragment]="navItem.fragment" >{{navItem.text}}</a>
            </li>

          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

      </div>
    </header>
  `
})
export class EkHeaderComponent implements OnInit {

  navItems: {link: string; text: string; fragment: string; active: boolean}[] = [
    {link: '/', text: 'Home', fragment: 'hero',  active: true},
    {link: '/about', text: 'About', fragment: 'about',  active: false},
    {link: '/blog', text: 'Blog', fragment: 'journal', active: false},
    {link: '/portfolio', text: 'Portfolio', fragment: 'portfolio', active: false},
    {link: '/contact', text: 'Contact', fragment: 'contact', active: false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
