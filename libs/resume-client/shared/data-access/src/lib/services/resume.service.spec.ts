import { TestBed } from '@angular/core/testing';
import { of, Subject, throwError } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { mockResume, Resume } from '@resume/shared/types';

import { ResumeApiService } from './resume-api.service';
import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  let api: { read: ReturnType<typeof vi.fn> };
  let service: ResumeService;

  beforeEach(() => {
    TestBed.resetTestingModule();
    api = { read: vi.fn() };

    TestBed.configureTestingModule({
      providers: [ResumeService, { provide: ResumeApiService, useValue: api }]
    });

    service = TestBed.inject(ResumeService);
  });

  it('should start with error false and loaded false', () => {
    expect(service.error()).toBe(false);
    expect(service.loaded()).toBe(false);
  });

  describe('loadResume$', () => {
    it('should update loaded to true when the request completes', () => {
      const response = new Subject<Resume>();
      api.read.mockReturnValue(response);

      const next = vi.fn();
      service.loadResume$().subscribe(next);

      expect(service.loaded()).toBe(false);
      expect(api.read).toHaveBeenCalledTimes(1);

      response.next(mockResume);

      expect(next).toHaveBeenCalledWith(mockResume);
      expect(service.loaded()).toBe(false);

      response.complete();

      expect(service.loaded()).toBe(true);
    });

    it('should emit resume data', () => {
      api.read.mockReturnValue(of(mockResume));
      const next = vi.fn();

      service.loadResume$().subscribe(next);

      expect(next).toHaveBeenCalledWith(mockResume);
      expect(service.loaded()).toBe(true);
      expect(service.error()).toBe(false);
    });

    it('should catch load errors', () => {
      api.read.mockReturnValue(throwError(() => new Error('No resume')));
      const error = vi.fn();
      const complete = vi.fn();

      service.loadResume$().subscribe({ error, complete });

      expect(service.error()).toBe(true);
      expect(service.loaded()).toBe(true);
      expect(error).not.toHaveBeenCalled();
      expect(complete).toHaveBeenCalledTimes(1);
    });
  });
});
