import { createFeatureSelector, createSelector } from '@ngrx/store';

import { resumeFeatureKey, ResumeState } from './resume.state';

// feature
const selectResumeFeature = createFeatureSelector<ResumeState>(resumeFeatureKey);

// projectors
const resume = (state: ResumeState) => state.entity;
const loaded = (state: ResumeState) => state.loaded;
const loading = (state: ResumeState) => state.loading;

// selectors
const selectResumeState = createSelector(selectResumeFeature, (state: ResumeState) => state);

// public
export const resumeProjectors = {
  loaded,
  loading,
  resume
};

export const resumeSelectors = {
  selectResumeState
};
