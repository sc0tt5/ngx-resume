import { Action, createReducer } from '@ngrx/store';

import { resumeInitialState, ResumeState } from './resume.state';
import { viewerReducerOns } from './viewer/viewer.reducer';

const reducer = createReducer(resumeInitialState, ...viewerReducerOns);

export function resumeReducer(state: ResumeState | undefined, action: Action): ResumeState {
  return reducer(state, action);
}
