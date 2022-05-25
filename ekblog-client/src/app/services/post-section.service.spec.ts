import {TestBed} from '@angular/core/testing';

import {PostSectionService} from './post-section.service';

describe('PostSectionService', () => {
  let service: PostSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
