import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ResumeApiService } from './resume-api.service';

describe('ResumeApiService', () => {
  let service: ResumeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResumeApiService]
    });

    service = TestBed.inject(ResumeApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
