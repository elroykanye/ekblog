import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EK_CONTACT} from "../../app.constants";

@Component({
  selector: 'app-ek-contact',
  templateUrl: './ek-contact.component.html',
  styleUrls: ['./ek-contact.component.scss']
})
export class EkContactComponent implements OnInit {

  contact = EK_CONTACT;
  contactForm: FormGroup;
  constructor() { this.contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });}

  ngOnInit(): void {
  }


  sendContactMessage() {
    console.log(this.contactForm)
  }
}
