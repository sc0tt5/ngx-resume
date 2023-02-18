import { Test, TestingModule } from '@nestjs/testing';

import { of } from 'rxjs';

import { mockResume } from '@ngx-resume/shared/models';

import { ResumeServerController } from './resume-server.controller';
import { ResumeServerService } from './resume-server.service';

describe('ResumeServerController', () => {
  let controller: ResumeServerController;
  let service: ResumeServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResumeServerController],
      providers: [
        ResumeServerService,
        {
          provide: ResumeServerService,
          useValue: {
            find: jest.fn().mockReturnValue(of(mockResume))
          }
        }
      ]
    }).compile();

    controller = module.get<ResumeServerController>(ResumeServerController);
    service = module.get<ResumeServerService>(ResumeServerService);
  });

  it('should create', () => {
    expect(controller).toBeDefined();
  });

  it('should return the resume data', done => {
    jest.spyOn(service, 'find');

    controller.find().subscribe(data => {
      expect(service.find).toHaveBeenCalledTimes(1);
      expect(data).toEqual(mockResume);
      done();
    });
  });
});
