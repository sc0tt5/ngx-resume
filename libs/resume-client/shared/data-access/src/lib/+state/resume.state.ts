import { ActionCreator, ReducerTypes } from '@ngrx/store';

import { Resume } from '@resume/shared/types';

export const RESUME_FEATURE_KEY = 'viewer';

export interface ResumeState {
  entity: Resume;
  loaded: boolean;
  loading: boolean;
}
export const resumeInitialState: Resume = {
  main: {
    sections: []
  },
  sidebar: {
    header: {
      firstname: '',
      lastname: '',
      title: ''
    },
    sections: []
  }
};

export type ResumeReducerTypes = ReducerTypes<ResumeState, ActionCreator[]>;

export const initialResumeState: ResumeState = {
  entity: resumeInitialState,
  loaded: false,
  loading: false
};

export const LOADING = { loading: true, loaded: false };
export const LOADED = { loading: false, loaded: true };
export const RESET = { loading: false, loaded: false };
