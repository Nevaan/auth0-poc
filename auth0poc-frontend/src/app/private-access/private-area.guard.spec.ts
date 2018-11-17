import { TestBed, async, inject } from '@angular/core/testing';

import { PrivateAreaGuard } from './private-area.guard';

describe('PrivateAreaGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateAreaGuard]
    });
  });

  it('should ...', inject([PrivateAreaGuard], (guard: PrivateAreaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
