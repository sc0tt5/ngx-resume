import { mockResume } from '@shared/models';

import { LOADED, LOADING, resumeInitialState } from '../resume.state';

import { resumeViewerSelectors } from './viewer.selectors';

describe('resumeViewerSelectors', () => {
  describe('selectResumeLoaded', () => {
    it('should return the header of the resume', () => {
      const state = { ...resumeInitialState, ...LOADED };
      expect(resumeViewerSelectors.selectResumeLoaded.projector(state)).toEqual(true);
    });
  });

  describe('selectResumeLoading', () => {
    it('should return the header of the resume', () => {
      const state = { ...resumeInitialState, ...LOADING };
      expect(resumeViewerSelectors.selectResumeLoading.projector(state)).toEqual(true);
    });
  });

  describe('selectSidebarHeader', () => {
    it('should return the header of the resume', () => {
      expect(resumeViewerSelectors.selectSidebarHeader.projector(mockResume.sidebar)).toEqual(
        mockResume.sidebar.header
      );
    });
  });

  describe('selectMainSections', () => {
    it('should return the main section of the resume', () => {
      expect(resumeViewerSelectors.selectMainSections.projector(mockResume.main)).toEqual(mockResume.main.sections);
    });
  });

  describe('selectSidebarSections', () => {
    it('should return the sidebar sections of the resume', () => {
      expect(resumeViewerSelectors.selectSidebarSections.projector(mockResume.sidebar)).toEqual(
        mockResume.sidebar.sections
      );
    });
  });
});
