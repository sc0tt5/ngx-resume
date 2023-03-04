import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { of, throwError } from 'rxjs';

import { mockResume, Resume } from '@shared/models';

import { resourceProviderMock } from '../../services/resource.service.mock';
import { ResumeApiService } from '../../services/resume-api.service';

import { resumeActions } from './viewer.actions';
import { ResumeEffects } from './viewer.effects';

describe('ResumeEffects', () => {
  let actions$: Actions;
  let effects: ResumeEffects;
  let resumeApiService: ResumeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        resourceProviderMock,
        ResumeEffects,
        {
          provide: ResumeApiService,
          useValue: {
            read: jest.fn().mockReturnValue(of({}))
          }
        },
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ResumeEffects);
    resumeApiService = TestBed.inject(ResumeApiService);
  });

  describe('loadResume$', () => {
    it('should return the loadResumeSuccess action with the resume data on success', () => {
      const resume: Resume = mockResume;
      const action = resumeActions.loadResume();
      const outcome = resumeActions.loadResumeSuccess({ resume });
      const response = cold('-a', { a: resume });
      const expected = cold('--b', { b: outcome });

      actions$ = hot('-c', { c: action });
      jest.spyOn(resumeApiService, 'read').mockReturnValue(response);

      expect(effects.loadResume$).toBeObservable(expected);
    });

    it('should return the loadResumeFail action with an error on failure', () => {
      const error = new Error('Test Error');
      const action = resumeActions.loadResume();
      const outcome = resumeActions.loadResumeFail({ error });
      const response = throwError(() => error);
      const expected = cold('-a', { a: outcome });

      actions$ = hot('-b', { b: action });
      jest.spyOn(resumeApiService, 'read').mockReturnValue(response);

      expect(effects.loadResume$).toBeObservable(expected);
    });
  });
});
