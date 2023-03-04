import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { Header, Section } from '@shared/models';

@Component({
  selector: '[res-ui-vi-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Input() header: Header;
  @Input() sections: Section[];
  @HostBinding('class') private readonly hostClasses = 'bg-light border-end';
}
