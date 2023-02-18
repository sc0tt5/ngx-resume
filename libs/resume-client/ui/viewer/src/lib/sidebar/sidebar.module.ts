import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RatingModule } from '../rating/rating.module';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [CommonModule, RatingModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}
