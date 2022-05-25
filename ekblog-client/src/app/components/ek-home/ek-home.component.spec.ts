import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkHomeComponent } from './ek-home.component';

describe('EkHomeComponent', () => {
  let component: EkHomeComponent;
  let fixture: ComponentFixture<EkHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
