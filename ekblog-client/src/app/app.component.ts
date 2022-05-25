import {Component, OnInit} from '@angular/core';
import {EK_CONTACT, EK_SERVICES, EK_SOCIALS} from "./app.constants";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

declare var MainJs: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
