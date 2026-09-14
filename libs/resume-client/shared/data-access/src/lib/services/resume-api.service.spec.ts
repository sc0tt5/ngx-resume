import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { mockResume, Resume } from '@resume/shared/types';

import { ResumeApiService } from './resume-api.service';

describe('ResumeApiService', () => {
  let httpTesting: HttpTestingController;
  let service: ResumeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), ResumeApiService]
    });

    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ResumeApiService);
  });

  afterEach(() => httpTesting.verify());

  describe('read', () => {
    it('should request the resume', () => {
      let resume: Resume | undefined;

      service.read().subscribe(response => (resume = response));

      const request = httpTesting.expectOne('http://localhost:8800/resume');
      expect(request.request.method).toBe('GET');

      request.flush(mockResume);

      expect(resume).toEqual(mockResume);
    });
  });
});
