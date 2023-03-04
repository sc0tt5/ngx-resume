import { createAction, props } from '@ngrx/store';

import { Resume } from '@shared/models';

// action constants
const LOAD_RESUME = '[Resume] Load Resume';
const LOAD_RESUME_FAIL = '[Resume] Load Resume Fail';
const LOAD_RESUME_SUCCESS = '[Resume] Load Resume Success';

// actions
const loadResume = createAction(LOAD_RESUME);
const loadResumeFail = createAction(LOAD_RESUME_FAIL, props<{ error: unknown }>());
const loadResumeSuccess = createAction(LOAD_RESUME_SUCCESS, props<{ resume: Resume }>());

// public
export const resumeActions = {
  loadResume,
  loadResumeFail,
  loadResumeSuccess
};
