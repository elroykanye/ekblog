import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkBlogPostComponent } from './ek-blog-post.component';

describe('EkBlogPostComponent', () => {
  let component: EkBlogPostComponent;
  let fixture: ComponentFixture<EkBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkBlogPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
