import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkAboutComponent } from './ek-about.component';

describe('EkAboutComponent', () => {
  let component: EkAboutComponent;
  let fixture: ComponentFixture<EkAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
