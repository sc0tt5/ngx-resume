import { mockResume } from '@shared/models';

import { LOADED, LOADING, resumeInitialState } from '../resume.state';

import { resumeViewerSelectors } from './viewer.selectors';

describe('resumeViewerSelectors', () => {
  describe('selectResumeLoaded', () => {
    it('should return the loaded state', () => {
      const state = { ...resumeInitialState, ...LOADED };
      expect(resumeViewerSelectors.selectResumeLoaded.projector(state)).toEqual(true);
    });
  });

  describe('selectResumeLoading', () => {
    it('should return the loading state', () => {
      const state = { ...resumeInitialState, ...LOADING };
      expect(resumeViewerSelectors.selectResumeLoading.projector(state)).toEqual(true);
    });
  });

  describe('selectFullName', () => {
    it('should return the first and last name', () => {
      expect(resumeViewerSelectors.selectFullName.projector(mockResume.sidebar.header)).toEqual(
        `${mockResume.sidebar.header.firstname} ${mockResume.sidebar.header.lastname}`
      );
    });
  });

  describe('selectHeader', () => {
    it('should return the sidebar header', () => {
      expect(resumeViewerSelectors.selectHeader.projector(mockResume.sidebar)).toEqual(mockResume.sidebar.header);
    });
  });

  describe('selectMain', () => {
    it('should return the main', () => {
      expect(resumeViewerSelectors.selectMain.projector(mockResume)).toEqual(mockResume.main);
    });
  });

  describe('selectMainSections', () => {
    it('should return the main section', () => {
      expect(resumeViewerSelectors.selectMainSections.projector(mockResume.main)).toEqual(mockResume.main.sections);
    });
  });

  describe('selectSidebar', () => {
    it('should return the sidebar', () => {
      expect(resumeViewerSelectors.selectSidebar.projector(mockResume)).toEqual(mockResume.sidebar);
    });
  });

  describe('selectSidebarHeader', () => {
    it('should return the header', () => {
      expect(resumeViewerSelectors.selectSidebarHeader.projector(mockResume.sidebar)).toEqual(
        mockResume.sidebar.header
      );
    });
  });

  describe('selectSidebarSections', () => {
    it('should return the sidebar sections', () => {
      expect(resumeViewerSelectors.selectSidebarSections.projector(mockResume.sidebar)).toEqual(
        mockResume.sidebar.sections
      );
    });
  });
});
