import { mockResume } from '@resume/shared/types';

import { resumeActions } from './resume.actions';
import { resumeReducer } from './resume.reducer';
import { LOADED, LOADING, initialResumeState, resumeInitialState } from './resume.state';

const resume = mockResume;

describe('viewerReducer', () => {
  describe('loadResume', () => {
    it('should set the loading state to true', () => {
      const action = resumeActions.loadResume();
      const state = resumeReducer(initialResumeState, action);

      expect(state).toEqual({ ...LOADING, ...{ entity: resumeInitialState } });
    });
  });

  describe('loadResumeSuccess', () => {
    it('should handle the loadResumeSuccess action', () => {
      const action = resumeActions.loadResumeSuccess({ resume });
      const state = resumeReducer(initialResumeState, action);

      expect(state).toEqual({ ...LOADED, ...{ entity: resume } });
    });
  });

  describe('loadResumeFail', () => {
    it('should handle the loadResumeFail action', () => {
      const action = resumeActions.loadResumeFail({ error: {} });
      const state = resumeReducer(initialResumeState, action);

      expect(state).toEqual(initialResumeState);
    });
  });
});
