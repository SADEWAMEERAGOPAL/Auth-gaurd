import { TestBed } from '@angular/core/testing';

import { CandiactiveGuard } from './candiactive.guard';

describe('CandiactiveGuard', () => {
  let guard: CandiactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandiactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
