import { TestBed } from '@angular/core/testing';

import { UserProfileResolveService } from './user-profile-resolve.service';

describe('UserProfileResolveService', () => {
  let service: UserProfileResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
