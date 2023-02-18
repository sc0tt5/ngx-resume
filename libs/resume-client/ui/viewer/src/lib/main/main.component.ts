import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Section } from '@ngx-resume/shared/models';

@Component({
  selector: 'res-ui-vi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  @Input() sections: Section[];
}
