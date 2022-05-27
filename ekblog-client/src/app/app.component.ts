import {Component, OnInit} from '@angular/core';
import {EK_SOCIALS} from "./app.constants";
import {slideAnimation} from "./app.animations";

declare var MainJs: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'ekblog-client';
  socials = EK_SOCIALS;




  constructor() {

  }

  ngOnInit() {
    new MainJs()
  }

}
