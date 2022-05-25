import { Component, OnInit } from '@angular/core';
import {EK_SERVICES, EK_SOCIALS} from "../../app.constants";

declare var MainJs: any;

@Component({
  selector: 'app-ek-home',
  templateUrl: './ek-home.component.html',
  styleUrls: ['./ek-home.component.scss']
})
export class EkHomeComponent implements OnInit {
  services = EK_SERVICES;

  constructor() { }

  ngOnInit(): void {
    new MainJs();
  }

}
