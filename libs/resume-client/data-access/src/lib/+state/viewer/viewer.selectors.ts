import { createSelector } from '@ngrx/store';

import { resumeProjectors, resumeSelectors } from '../resume.selectors';

const selectResume = createSelector(resumeSelectors.selectResumeState, resumeProjectors.resume);
const selectResumeLoaded = createSelector(resumeSelectors.selectResumeState, resumeProjectors.loaded);
const selectResumeLoading = createSelector(resumeSelectors.selectResumeState, resumeProjectors.loading);
const selectHeader = createSelector(selectResume, resume => resume.header);
const selectIntro = createSelector(selectResume, resume => resume.intro);
const selectSections = createSelector(selectResume, resume => resume.sections);
const selectSidebar = createSelector(selectResume, resume => resume.sideBar);

export const resumeViewerSelectors = {
  selectResumeLoaded,
  selectResumeLoading,
  selectHeader,
  selectIntro,
  selectSections,
  selectSidebar
};
