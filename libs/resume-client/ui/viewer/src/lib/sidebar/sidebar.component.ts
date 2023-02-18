import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Sidebar } from '@ngx-resume/shared/models';

@Component({
  selector: 'res-ui-vi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Input() sections: Sidebar[];
}
