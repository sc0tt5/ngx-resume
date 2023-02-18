import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { ViewerService } from '../../services/viewer.service';

import { resumeActions } from './viewer.actions';
import { resumeViewerSelectors } from './viewer.selectors';

@Injectable({ providedIn: 'root' })
export class ViewerFacade implements ViewerService {
  header$ = this.store.select(resumeViewerSelectors.selectHeader);
  intro$ = this.store.select(resumeViewerSelectors.selectIntro);
  sections$ = this.store.select(resumeViewerSelectors.selectSections);
  sidebar$ = this.store.select(resumeViewerSelectors.selectSidebar);
  loaded$ = this.store.select(resumeViewerSelectors.selectResumeLoaded);

  constructor(private store: Store) {}

  loadResume(): void {
    this.store.dispatch(resumeActions.loadResume());
  }
}
