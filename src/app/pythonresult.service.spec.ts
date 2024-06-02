import { TestBed } from '@angular/core/testing';

import { PythonresultService } from './pythonresult.service';

describe('PythonresultService', () => {
  let service: PythonresultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
