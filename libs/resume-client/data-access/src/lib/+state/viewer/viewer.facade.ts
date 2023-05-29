import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Header, Section } from '@shared/models';

import { ViewerService } from '../../services/viewer.service';

import { resumeActions } from './viewer.actions';
import { resumeViewerSelectors } from './viewer.selectors';

@Injectable({ providedIn: 'root' })
export class ViewerFacade implements ViewerService {
  fullName$: Observable<string>;
  header$: Observable<Header>;
  mainSections$: Observable<Section[]>;
  sidebarSections$: Observable<Section[]>;
  loaded$: Observable<boolean>;

  constructor(private store: Store) {
    this.fullName$ = this.store.select(resumeViewerSelectors.selectFullName);
    this.header$ = this.store.select(resumeViewerSelectors.selectSidebarHeader);
    this.mainSections$ = this.store.select(resumeViewerSelectors.selectMainSections);
    this.sidebarSections$ = this.store.select(resumeViewerSelectors.selectSidebarSections);
    this.loaded$ = this.store.select(resumeViewerSelectors.selectResumeLoaded);
  }

  loadResume(): void {
    this.store.dispatch(resumeActions.loadResume());
  }
}
