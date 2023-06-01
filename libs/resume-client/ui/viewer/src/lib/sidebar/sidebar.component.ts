import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { Header, Section } from '@shared/models';

import { RatingComponent } from '../rating/rating.component';

export const sidebarConfig = {
  selector: '[res-ui-vi-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RatingComponent]
};

@Component({
  selector: '[res-ui-vi-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgClass, NgFor, NgIf, RatingComponent]
})
export class SidebarComponent {
  @Input({ required: true }) header: Header;
  @Input({ required: true }) sections: Section[];

  @HostBinding('class') private readonly hostClasses = 'bg-light border-end';
}
