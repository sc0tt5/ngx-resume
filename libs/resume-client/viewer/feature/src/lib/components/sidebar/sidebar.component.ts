import { Component, input } from '@angular/core';

import { Header, Section } from '@resume/shared/types';

import { RatingComponent } from '../rating/rating.component';

@Component({
  imports: [RatingComponent],
  selector: '[resFtViewerSidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: { class: 'bg-light border-end' }
})
export class SidebarComponent {
  readonly header = input.required<Header>();
  readonly sections = input.required<Section[]>();
}
