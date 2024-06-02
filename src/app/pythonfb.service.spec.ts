import { TestBed } from '@angular/core/testing';

import { PythonfbService } from './pythonfb.service';

describe('PythonfbService', () => {
  let service: PythonfbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonfbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
