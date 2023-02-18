import { resumeReducer } from './resume.reducer';
import { LOADING, resumeInitialState } from './resume.state';
import { resumeActions } from './viewer/viewer.actions';

describe('resumeReducer', () => {
  it('should return the initial state', () => {
    expect(resumeReducer(undefined, { type: undefined })).toEqual(resumeInitialState);
  });

  it('should handle an action and return the updated state', () => {
    const state = resumeInitialState;
    const action = resumeActions.loadResume();
    const expected = { ...resumeInitialState, ...LOADING };

    expect(resumeReducer(state, action)).toEqual(expected);
  });
});
