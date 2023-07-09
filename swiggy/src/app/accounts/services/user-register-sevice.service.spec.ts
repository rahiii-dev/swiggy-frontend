import { TestBed } from '@angular/core/testing';

import { UserRegisterSeviceService } from './user-register-sevice.service';

describe('UserRegisterSeviceService', () => {
  let service: UserRegisterSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegisterSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
