import { TestBed } from '@angular/core/testing';

import { PrivateApiService } from './private-api.service';

describe('PrivateApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivateApiService = TestBed.get(PrivateApiService);
    expect(service).toBeTruthy();
  });
});
