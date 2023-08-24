import { TestBed } from '@angular/core/testing';

import { AyabiliariaService } from './ayabiliaria.service';

describe('AyabiliariaService', () => {
  let service: AyabiliariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyabiliariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
