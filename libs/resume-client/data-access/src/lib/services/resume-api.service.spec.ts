import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';

import { ResumeApiService } from './resume-api.service';

describe('ResumeApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: ResumeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResumeApiService, { provide: PLATFORM_ID, useValue: 'browser' }, TransferState]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ResumeApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should be platform browser', () => {
    expect(service.isBrowser).toBeTruthy();
  });
});
