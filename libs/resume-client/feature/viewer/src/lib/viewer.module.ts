import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderModule, MainModule, SidebarModule } from '@ngx-resume/client/ui/viewer';

import { ViewerComponent } from './viewer.component';
import { VIEWER_ROUTES } from './viewer.routes';

@NgModule({
  imports: [CommonModule, HeaderModule, MainModule, SidebarModule, RouterModule.forChild(VIEWER_ROUTES)],
  declarations: [ViewerComponent]
})
export class ViewerModule {}
