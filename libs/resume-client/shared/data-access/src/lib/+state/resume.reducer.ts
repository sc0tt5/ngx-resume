import { Action, createReducer, on } from '@ngrx/store';

import { resumeActions } from './resume.actions';
import { LOADED, LOADING, RESET, ResumeReducerTypes, ResumeState, initialResumeState } from './resume.state';

export const viewerReducerOns: ResumeReducerTypes[] = [
  on(resumeActions.loadResume, state => ({ ...state, ...LOADING })),
  on(resumeActions.loadResumeSuccess, (state, { resume }) => ({ ...state, ...LOADED, ...{ entity: resume } })),
  on(resumeActions.loadResumeFail, state => ({ ...state, ...RESET }))
];

const reducer = createReducer(initialResumeState, ...viewerReducerOns);

export function resumeReducer(state: ResumeState | undefined, action: Action): ResumeState {
  return reducer(state, action);
}
