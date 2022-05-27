import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditPostComponent } from './adm-edit-post.component';

describe('AdmEditPostComponent', () => {
  let component: AdmEditPostComponent;
  let fixture: ComponentFixture<AdmEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmEditPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
