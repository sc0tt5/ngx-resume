import { TestBed } from '@automock/jest';
import { of } from 'rxjs';

import { mockCoverLetter, mockResume } from '@shared/models';

import { ResumeServerController } from './resume-server.controller';
import { ResumeServerService } from './resume-server.service';

describe('ResumeServerController', () => {
  let controller: ResumeServerController;
  let service: jest.Mocked<ResumeServerService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(ResumeServerController)
      .mock(ResumeServerService)
      .using({
        findCoverLetter: jest.fn().mockReturnValueOnce(of(mockCoverLetter)),
        findResume: jest.fn().mockReturnValueOnce(of(mockResume))
      })
      .compile();
    controller = unit;
    service = unitRef.get(ResumeServerService);
  });

  describe('findCoverLetter', () => {
    it('should return the cover letter data', done => {
      jest.spyOn(service, 'findCoverLetter');

      controller.findCoverLetter().subscribe(data => {
        expect(service.findCoverLetter).toHaveBeenCalledTimes(1);
        expect(data).toEqual(mockCoverLetter);
        done();
      });
    });
  });

  describe('findResume', () => {
    it('should return the resume data', done => {
      jest.spyOn(service, 'findResume');

      controller.findResume().subscribe(data => {
        expect(service.findResume).toHaveBeenCalledTimes(1);
        expect(data).toEqual(mockResume);
        done();
      });
    });
  });
});
