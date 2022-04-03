import { TestBed } from '@angular/core/testing';

import { UserRegistrationProfileService } from './user-registration-profile.service';

describe('UserRegistrationProfileService', () => {
  let service: UserRegistrationProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrationProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
