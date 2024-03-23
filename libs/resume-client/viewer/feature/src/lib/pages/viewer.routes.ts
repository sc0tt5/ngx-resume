import { Route } from '@angular/router';

import { ViewerComponent } from './viewer.component';
import { canActivateViewer } from './viewer.guard';

export const viewerRoutes: Route[] = [
  {
    path: '',
    component: ViewerComponent,
    canActivate: [canActivateViewer]
  }
];
