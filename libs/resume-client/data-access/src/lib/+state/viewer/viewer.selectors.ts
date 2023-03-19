import { createSelector } from '@ngrx/store';

import { Header, Sidebar } from '@shared/models';

import { resumeProjectors, resumeSelectors } from '../resume.selectors';

const selectResume = createSelector(resumeSelectors.selectResumeState, resumeProjectors.resume);
const selectResumeLoaded = createSelector(resumeSelectors.selectResumeState, resumeProjectors.loaded);
const selectResumeLoading = createSelector(resumeSelectors.selectResumeState, resumeProjectors.loading);
const selectSidebar = createSelector(selectResume, resume => resume.sidebar);
const selectSidebarHeader = createSelector(selectSidebar, sidebar => sidebar.header);
const selectSidebarSections = createSelector(selectSidebar, sidebar => sidebar.sections);
const selectMain = createSelector(selectResume, resume => resume.main);
const selectMainSections = createSelector(selectMain, main => main.sections);
const selectHeader = createSelector(selectSidebar, (sidebar: Sidebar) => sidebar.header);
const selectFullName = createSelector(selectHeader, (header: Header) => `${header.firstname} ${header.lastname}`);

export const resumeViewerSelectors = {
  selectResumeLoaded,
  selectResumeLoading,
  selectFullName,
  selectHeader,
  selectMain,
  selectMainSections,
  selectSidebar,
  selectSidebarHeader,
  selectSidebarSections
};
