import { TestBed } from '@angular/core/testing';

import { CriptomoedasService } from './criptomoedas.service';

describe('CriptomoedasService', () => {
  let service: CriptomoedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriptomoedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
