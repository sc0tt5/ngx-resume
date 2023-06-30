import { Injectable, inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { ViewerService } from '../../services/viewer.service';

import { resumeActions } from './viewer.actions';
import { resumeViewerSelectors } from './viewer.selectors';

@Injectable({ providedIn: 'root' })
export class ViewerFacade implements ViewerService {
  private readonly store = inject(Store);
  fullName$ = this.store.select(resumeViewerSelectors.selectFullName);
  header$ = this.store.select(resumeViewerSelectors.selectSidebarHeader);
  mainSections$ = this.store.select(resumeViewerSelectors.selectMainSections);
  sidebarSections$ = this.store.select(resumeViewerSelectors.selectSidebarSections);
  loaded$ = this.store.select(resumeViewerSelectors.selectResumeLoaded);

  loadResume(): void {
    this.store.dispatch(resumeActions.loadResume());
  }
}
