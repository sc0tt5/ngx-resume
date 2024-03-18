import { Injectable, inject } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { ResumeService } from '../services/resume.service';

import { resumeActions } from './resume.actions';
import { resumeSelectors } from './resume.selectors';

@Injectable()
export class ResumeFacade implements ResumeService {
  private readonly store = inject(Store);

  readonly fullName$ = this.store.select(resumeSelectors.selectFullName);
  readonly loaded$ = this.store.pipe(select(resumeSelectors.selectResumeLoaded));
  readonly resume$ = this.store.pipe(select(resumeSelectors.selectResume));

  loadResume(): void {
    this.store.dispatch(resumeActions.loadResume());
  }
}
