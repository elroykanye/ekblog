import { Component, OnInit } from '@angular/core';
import {EK_SOCIALS} from "../../app.constants";

@Component({
  selector: 'app-ek-footer',
  templateUrl: './ek-footer.component.html',
  styleUrls: ['./ek-footer.component.scss']
})
export class EkFooterComponent implements OnInit {
  socials = EK_SOCIALS;
  constructor() { }

  ngOnInit(): void {
  }

}
