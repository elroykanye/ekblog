import { Component, OnInit } from '@angular/core';

declare let MainJs: any;
@Component({
  selector: 'app-ek-about',
  templateUrl: './ek-about.component.html',
  styleUrls: ['./ek-about.component.scss']
})
export class EkAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new MainJs();
  }

}
