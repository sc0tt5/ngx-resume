import { createSelector } from '@ngrx/store';

import { resumeProjectors, resumeSelectors } from '../resume.selectors';

const selectResume = createSelector(resumeSelectors.selectResumeState, resumeProjectors.resume);
const selectResumeLoaded = createSelector(resumeSelectors.selectResumeState, resumeProjectors.loaded);
const selectResumeLoading = createSelector(resumeSelectors.selectResumeState, resumeProjectors.loading);
const selectSidebar = createSelector(selectResume, resume => resume.sidebar);
const selectSidebarHeader = createSelector(selectSidebar, sidebar => sidebar.header);
const selectSidebarSections = createSelector(selectSidebar, sidebar => sidebar.sections);
const selectMain = createSelector(selectResume, resume => resume.main);
const selectMainSections = createSelector(selectMain, main => main.sections);

export const resumeViewerSelectors = {
  selectResumeLoaded,
  selectResumeLoading,
  selectSidebarHeader,
  selectSidebarSections,
  selectMainSections
};
