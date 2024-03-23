import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { Header, Section } from '@resume/shared/types';

import { RatingComponent } from '../rating/rating.component';

@Component({
  standalone: true,
  imports: [NgClass, NgFor, NgIf, RatingComponent],
  selector: '[resFtViewerSidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Input({ required: true }) header: Header = { firstname: '', lastname: '', title: '' };
  @Input({ required: true }) sections: Section[] = [];

  @HostBinding('class') private readonly hostClasses = 'bg-light border-end';
}
