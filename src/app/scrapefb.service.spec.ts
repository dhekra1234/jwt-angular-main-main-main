import { TestBed } from '@angular/core/testing';

import { ScrapefbService } from './scrapefb.service';

describe('ScrapefbService', () => {
  let service: ScrapefbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrapefbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
