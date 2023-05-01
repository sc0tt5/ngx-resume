import { HttpService } from '@nestjs/axios';

import { TestBed } from '@automock/jest';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';

import { mockCoverLetter, mockResume } from '@shared/models';

import { ResumeServerService } from './resume-server.service';

const COVER_LETTER_ENDPOINT = 'http://localhost:8800/cover-letter';
const RESUME_ENDPOINT = 'http://localhost:8800/resume';

const mockAxiosResponse = (mockData: unknown): AxiosResponse =>
  ({
    data: mockData
  } as unknown as AxiosResponse);

describe('ResumeServerService', () => {
  let service: ResumeServerService;
  let httpService: jest.Mocked<HttpService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(ResumeServerService).mock(HttpService).using({ get: jest.fn() }).compile();
    service = unit;
    httpService = unitRef.get(HttpService);
  });

  describe('findCoverLetter', () => {
    it('should return the cover letter data', done => {
      jest.spyOn(httpService, 'get');
      httpService.get.mockReturnValueOnce(of(mockAxiosResponse(mockCoverLetter)));

      service.findCoverLetter().subscribe(data => {
        expect(httpService.get).toHaveBeenCalledWith(COVER_LETTER_ENDPOINT);
        expect(data).toEqual(mockCoverLetter);
        done();
      });
    });
  });

  describe('findResume', () => {
    it('should return the resume data', done => {
      jest.spyOn(httpService, 'get');
      httpService.get.mockReturnValueOnce(of(mockAxiosResponse(mockResume)));

      service.findResume().subscribe(data => {
        expect(httpService.get).toHaveBeenCalledWith(RESUME_ENDPOINT);
        expect(data).toEqual(mockResume);
        done();
      });
    });
  });
});
