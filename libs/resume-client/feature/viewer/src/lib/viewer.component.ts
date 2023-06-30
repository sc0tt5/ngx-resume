import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ViewerService } from '@client/data-access';

@Component({
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewerComponent {
  private readonly viewer = inject(ViewerService);
  header$ = this.viewer.header$;
  mainSections$ = this.viewer.mainSections$;
  sidebarSections$ = this.viewer.sidebarSections$;
  loaded$ = this.viewer.loaded$;
}
