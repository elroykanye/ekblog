import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkBlogComponent } from './ek-blog.component';

describe('EkBlogComponent', () => {
  let component: EkBlogComponent;
  let fixture: ComponentFixture<EkBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
