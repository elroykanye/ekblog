import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkPortfolioComponent } from './ek-portfolio.component';

describe('EkPortfolioComponent', () => {
  let component: EkPortfolioComponent;
  let fixture: ComponentFixture<EkPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
