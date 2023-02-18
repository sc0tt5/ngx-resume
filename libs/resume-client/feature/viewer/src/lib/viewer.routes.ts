import { Routes } from '@angular/router';

import { ViewerComponent } from './viewer.component';
import { ViewerGuard } from './viewer.guard';

export const VIEWER_ROUTES: Routes = [
  {
    path: '',
    component: ViewerComponent,
    canActivate: [ViewerGuard]
  }
];
