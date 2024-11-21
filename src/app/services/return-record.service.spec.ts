import { TestBed } from '@angular/core/testing';

import { ReturnRecordService } from './return-record.service';

describe('ReturnRecordService', () => {
  let service: ReturnRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
