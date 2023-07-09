import { TestBed } from '@angular/core/testing';

import { BackenAPIInterceptor } from './backen-api.interceptor';

describe('BackenAPIInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BackenAPIInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BackenAPIInterceptor = TestBed.inject(BackenAPIInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
