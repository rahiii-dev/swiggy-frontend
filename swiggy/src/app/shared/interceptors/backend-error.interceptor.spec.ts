import { TestBed } from '@angular/core/testing';

import { BackendErrorInterceptor } from './backend-error.interceptor';

describe('BackendErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BackendErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BackendErrorInterceptor = TestBed.inject(BackendErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
