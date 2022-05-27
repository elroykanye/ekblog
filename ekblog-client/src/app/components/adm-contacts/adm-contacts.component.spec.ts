import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmContactsComponent } from './adm-contacts.component';

describe('AdmContactsComponent', () => {
  let component: AdmContactsComponent;
  let fixture: ComponentFixture<AdmContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
