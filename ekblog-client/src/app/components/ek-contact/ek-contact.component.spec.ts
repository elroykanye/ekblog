import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkContactComponent } from './ek-contact.component';

describe('EkContactComponent', () => {
  let component: EkContactComponent;
  let fixture: ComponentFixture<EkContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
