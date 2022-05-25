import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkHeaderComponent } from './ek-header.component';

describe('EkHeaderComponent', () => {
  let component: EkHeaderComponent;
  let fixture: ComponentFixture<EkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
