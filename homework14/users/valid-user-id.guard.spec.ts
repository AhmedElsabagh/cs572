import { TestBed, async, inject } from '@angular/core/testing';

import { ValidUserIdGuard } from './valid-user-id.guard';

describe('ValidUserIdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidUserIdGuard]
    });
  });

  it('should ...', inject([ValidUserIdGuard], (guard: ValidUserIdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
