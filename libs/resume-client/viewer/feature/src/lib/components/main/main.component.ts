import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ListType, Section } from '@resume/shared/types';

@Component({
  standalone: true,
  imports: [NgClass, NgFor, NgSwitch, NgIf, NgSwitchCase],
  selector: '[resFtViewerMain]',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  @Input({ required: true }) sections: Section[] = [];

  readonly listTypeExperience = ListType.EXPERIENCE;
  readonly listTypeIntro = ListType.INTRO;
}
