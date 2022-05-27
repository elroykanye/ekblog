import {Component, OnInit} from '@angular/core';
import {EK_SERVICES} from "../../app.constants";

declare var MainJs: any;

@Component({
  selector: 'app-ek-home',
  styleUrls: ['./ek-home.component.scss'],
  template: `
    <app-ek-about></app-ek-about>

    <div id="services">
      <div class="container">
        <div class="services-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">
            <div class="swiper-slide" *ngFor="let service of services">
              <div class="services-block">
                <i class="{{service.icon}}"></i>
                <span>{{service.name}}</span>
                <p class="separator">
                  {{service.desc}}
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <app-ek-portfolio></app-ek-portfolio>

    <app-ek-blog></app-ek-blog>

    <app-ek-contact></app-ek-contact>
  `
})
export class EkHomeComponent implements OnInit {
  services = EK_SERVICES;

  constructor() { }

  ngOnInit(): void {
    new MainJs();
  }

}
