import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/viewer', pathMatch: 'full' },
  {
    path: 'viewer',
    loadChildren: () => import('@resume/viewer/feature').then(f => f.viewerRoutes)
  }
];
