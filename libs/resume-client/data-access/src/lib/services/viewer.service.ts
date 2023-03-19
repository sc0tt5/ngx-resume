import { Provider } from '@angular/core';

import { Observable } from 'rxjs';

import { Header, Section } from '@shared/models';

import { ViewerFacade } from '../+state/viewer/viewer.facade';

export abstract class ViewerService {
  abstract fullName$: Observable<string>;
  abstract header$: Observable<Header>;
  abstract mainSections$: Observable<Section[]>;
  abstract sidebarSections$: Observable<Section[]>;
  abstract loaded$: Observable<boolean>;
  abstract loadResume(): void;
}

export const VIEWER_PROVIDER: Provider = { provide: ViewerService, useClass: ViewerFacade };
