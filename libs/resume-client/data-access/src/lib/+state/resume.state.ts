import { ActionCreator, ReducerTypes } from '@ngrx/store';

import { Resume } from '@shared/models';

export const resumeFeatureKey = 'resume';

export interface ResumeState {
  resume: Resume;
  loaded: boolean;
  loading: boolean;
}

export type ResumeReducerTypes = ReducerTypes<ResumeState, ActionCreator[]>;

export const resumeInitialState: ResumeState = {
  resume: null,
  loaded: false,
  loading: false
};

export const LOADING = { loading: true, loaded: false };
export const LOADED = { loading: false, loaded: true };
export const RESET = { loading: false, loaded: false };
