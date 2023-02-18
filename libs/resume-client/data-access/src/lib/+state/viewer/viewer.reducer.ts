import { on } from '@ngrx/store';

import { LOADED, LOADING, RESET, ResumeReducerTypes } from '../resume.state';

import { resumeActions } from './viewer.actions';

export const viewerReducerOns: ResumeReducerTypes[] = [
  on(resumeActions.loadResume, state => ({ ...state, ...LOADING })),
  on(resumeActions.loadResumeSuccess, (state, payload) => {
    const resume = payload.resume;
    return { ...state, ...LOADED, ...{ resume } };
  }),
  on(resumeActions.loadResumeFail, state => ({ ...state, ...RESET }))
];
