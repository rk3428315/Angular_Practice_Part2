import { TestBed } from '@angular/core/testing';

import { AuthchildGuard } from './authchild.guard';

describe('AuthchildGuard', () => {
  let guard: AuthchildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthchildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
