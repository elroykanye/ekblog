import {Component, OnInit} from '@angular/core';

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
              <a #navAnchor (click)="setActive(navItem.id)"
                 class="nav-link scrollto {{navItem.id == currentNavItemId ? 'active': ''}}"
                 [routerLink]="[navItem.link]" [fragment]="navItem.fragment">{{navItem.text}}</a>
            </li>

          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

      </div>
    </header>
  `
})
export class EkHeaderComponent implements OnInit {


  navItems: NavItem[] = [
    {id: 0, link: '/', text: 'Home', fragment: 'hero', active: true},
    {id: 1, link: '/about', text: 'About', fragment: 'about', active: false},
    {id: 2, link: '/blog', text: 'Blog', fragment: 'journal', active: false},
    {id: 3, link: '/portfolio', text: 'Portfolio', fragment: 'portfolio', active: false},
    {id: 4, link: '/', text: 'Contact', fragment: 'contact', active: false},
  ]
  currentNavItemId: number = -1;

  constructor() {
  }

  ngOnInit(): void {
  }

  setActive(id: number) {
    this.currentNavItemId = id;
  }
}

type NavItem = {
  id: number,
  text: string,
  link: string,
  fragment: string,
  active: boolean
}
