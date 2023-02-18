import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/viewer', pathMatch: 'full' },
  {
    path: 'viewer',
    loadChildren: () => import('@ngx-resume/client/feature/viewer').then(m => m.ViewerModule)
  }
];
