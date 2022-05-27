import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDelPostComponent } from './adm-del-post.component';

describe('AdmDelPostComponent', () => {
  let component: AdmDelPostComponent;
  let fixture: ComponentFixture<AdmDelPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmDelPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDelPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
