import { Route } from '@angular/router';

import { viewerRoutes } from '@resume/viewer/feature';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/viewer', pathMatch: 'full' },
  { path: 'viewer', children: viewerRoutes }
];
