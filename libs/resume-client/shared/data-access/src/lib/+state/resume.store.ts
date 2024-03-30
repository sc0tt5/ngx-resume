import { EnvironmentProviders, isDevMode, Provider } from '@angular/core';

import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { RESUME_PROVIDER } from '../services/resume.service';

import { ResumeEffects } from './resume.effects';
import { resumeReducer } from './resume.reducer';
import { RESUME_FEATURE_KEY } from './resume.state';

export const RESUME_STORE: Array<Provider | EnvironmentProviders> = [
  provideStore(),
  provideStoreDevtools({ logOnly: !isDevMode() }),
  provideEffects(ResumeEffects),
  provideState(RESUME_FEATURE_KEY, resumeReducer),
  RESUME_PROVIDER
];
