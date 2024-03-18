import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RESUME_FEATURE_KEY, ResumeState } from './resume.state';

// feature selector
const selectResumeFeature = createFeatureSelector<ResumeState>(RESUME_FEATURE_KEY);

// selectors
const selectResumeState = createSelector(selectResumeFeature, (state: ResumeState) => state);
const selectResume = createSelector(selectResumeState, state => state.entity);
const selectResumeLoaded = createSelector(selectResumeState, state => state.loaded);
const selectResumeLoading = createSelector(selectResumeState, state => state.loading);
const selectSidebar = createSelector(selectResume, resume => resume?.sidebar);
const selectSidebarHeader = createSelector(selectSidebar, sidebar => sidebar?.header);
const selectFullName = createSelector(selectSidebarHeader, header => `${header?.firstname} ${header?.lastname}`);

export const resumeSelectors = {
  selectFullName,
  selectResume,
  selectResumeLoaded,
  selectResumeLoading
};
