import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainModule, SidebarModule } from '@client/ui/viewer';

import { ViewerComponent } from './viewer.component';
import { VIEWER_ROUTES } from './viewer.routes';

@NgModule({
  imports: [CommonModule, MainModule, SidebarModule, RouterModule.forChild(VIEWER_ROUTES)],
  declarations: [ViewerComponent]
})
export class ViewerModule {}
