import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkFooterComponent } from './ek-footer.component';

describe('EkFooterComponent', () => {
  let component: EkFooterComponent;
  let fixture: ComponentFixture<EkFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
