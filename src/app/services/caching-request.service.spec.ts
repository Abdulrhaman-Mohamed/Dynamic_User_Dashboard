import { TestBed } from '@angular/core/testing';

import { CachingRequestService } from './caching-request.service';

describe('CachingRequestService', () => {
  let service: CachingRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachingRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
