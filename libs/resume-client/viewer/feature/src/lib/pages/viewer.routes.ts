import { Route } from '@angular/router';

import { ViewerComponent } from './viewer.component';
import { resolveViewer } from './viewer.resolver';

export const viewerRoutes: Route[] = [
  {
    path: '',
    component: ViewerComponent,
    resolve: { resume: resolveViewer }
  }
];
