import { mockResume } from '@ngx-resume/shared/models';

import { resumeReducer } from '../resume.reducer';
import { LOADED, LOADING, resumeInitialState } from '../resume.state';

import { resumeActions } from './viewer.actions';

const resume = mockResume;

describe('viewerReducer', () => {
  describe('loadResume', () => {
    it('should set the loading state to true loadResume action', () => {
      const action = resumeActions.loadResume();
      const state = resumeReducer(resumeInitialState, action);

      expect(state).toEqual({ ...LOADING, ...{ resume: null } });
    });
  });

  describe('loadResumeSuccess', () => {
    it('should handle the loadResumeSuccess action', () => {
      const action = resumeActions.loadResumeSuccess({ resume });
      const state = resumeReducer(resumeInitialState, action);

      expect(state).toEqual({ ...LOADED, ...{ resume } });
    });
  });

  describe('loadResumeFail', () => {
    it('should handle the loadResumeFail action', () => {
      const action = resumeActions.loadResumeFail({ error: {} });
      const state = resumeReducer(resumeInitialState, action);

      expect(state).toEqual(resumeInitialState);
    });
  });
});
