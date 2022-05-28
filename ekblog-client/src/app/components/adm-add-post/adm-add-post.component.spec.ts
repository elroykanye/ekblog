import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdmAddPostComponent} from './adm-add-post.component';

describe('AdmAddPostComponent', () => {
  let component: AdmAddPostComponent;
  let fixture: ComponentFixture<AdmAddPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmAddPostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
