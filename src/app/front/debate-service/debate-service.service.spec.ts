import { TestBed, inject } from '@angular/core/testing';

import { DebateServiceService } from './debate-service.service';

describe('DebateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebateServiceService]
    });
  });

  it('should be created', inject([DebateServiceService], (service: DebateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
