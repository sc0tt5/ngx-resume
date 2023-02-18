import { Provider } from '@angular/core';

import { Observable } from 'rxjs';

import { Header, Section, Sidebar } from '@ngx-resume/shared/models';

import { ViewerFacade } from '../+state/viewer/viewer.facade';

export abstract class ViewerService {
  abstract header$: Observable<Header>;
  abstract intro$: Observable<string>;
  abstract sections$: Observable<Section[]>;
  abstract sidebar$: Observable<Sidebar[]>;
  abstract loaded$: Observable<boolean>;
  abstract loadResume(): void;
}

export const VIEWER_PROVIDER: Provider = { provide: ViewerService, useClass: ViewerFacade };
