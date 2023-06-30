import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { of } from 'rxjs';

import { mockResume } from '@shared/models';

import { ResumeServerService } from './resume-server.service';

const RESUME_ENDPOINT = 'http://localhost:8800/resume';

describe('ResumeServerService', () => {
  let service: ResumeServerService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResumeServerService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn().mockReturnValue(of({ data: mockResume }))
          }
        }
      ]
    }).compile();

    service = module.get<ResumeServerService>(ResumeServerService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should return the resume data', done => {
    jest.spyOn(httpService, 'get');

    service.find().subscribe(data => {
      expect(httpService.get).toHaveBeenCalledWith(RESUME_ENDPOINT);
      expect(data).toEqual(mockResume);
      done();
    });
  });
});
