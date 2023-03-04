import { mockResume } from '@shared/models';

import { resumeProjectors, resumeSelectors } from './resume.selectors';
import { LOADED, LOADING, resumeInitialState } from './resume.state';

// const resume = mockResume;
const mockLoadedState = { ...resumeInitialState, ...{ resume: mockResume }, ...LOADED };
const mockLoadingState = { ...resumeInitialState, ...LOADING };

describe('resumeSelectors selectResumeState', () => {
  it('should return the resume state', () => {
    expect(resumeSelectors.selectResumeState.projector(mockResume)).toEqual(mockResume);
  });
});

describe('resumeProjectors', () => {
  describe('loaded', () => {
    it('should return the resume loaded status', () => {
      expect(resumeProjectors.loaded(mockLoadedState)).toEqual(mockLoadedState.loaded);
    });
  });

  describe('loading', () => {
    it('should return the resume loading status', () => {
      expect(resumeProjectors.loading(mockLoadingState)).toEqual(mockLoadingState.loading);
    });
  });

  describe('resume', () => {
    it('should return the resume data', () => {
      expect(resumeProjectors.resume(mockLoadedState)).toEqual(mockLoadedState.resume);
    });
  });
});
