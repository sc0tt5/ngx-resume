import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { VIEWER_PROVIDER } from '../services/viewer.service';

import { resumeReducer } from './resume.reducer';
import { resumeFeatureKey, resumeInitialState } from './resume.state';
import { ResumeEffects } from './viewer/viewer.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(resumeFeatureKey, resumeReducer, { initialState: resumeInitialState }),
    EffectsModule.forFeature([ResumeEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [VIEWER_PROVIDER]
})
export class ResumeStoreModule {}
