import { mockResume } from '@resume/shared/types';

import { resumeSelectors } from './resume.selectors';
import { LOADED, LOADING, resumeInitialState } from './resume.state';

describe('resumeSelectors', () => {
  describe('selectFullName', () => {
    it('should return the first and last name', () => {
      expect(resumeSelectors.selectFullName.projector(mockResume.sidebar.header)).toEqual(
        `${mockResume.sidebar.header.firstname} ${mockResume.sidebar.header.lastname}`
      );
    });
  });

  describe('selectResume', () => {
    it('should return the resume', () => {
      expect(resumeSelectors.selectFullName.projector(mockResume.sidebar.header)).toEqual(
        `${mockResume.sidebar.header.firstname} ${mockResume.sidebar.header.lastname}`
      );
    });
  });

  describe('selectResumeLoaded', () => {
    it('should return the loaded state', () => {
      const state = { ...{ entity: resumeInitialState }, ...LOADED };
      expect(resumeSelectors.selectResumeLoaded.projector(state)).toEqual(true);
    });
  });

  describe('selectResumeLoading', () => {
    it('should return the loading state', () => {
      const state = { ...{ entity: resumeInitialState }, ...LOADING };
      expect(resumeSelectors.selectResumeLoading.projector(state)).toEqual(true);
    });
  });
});
