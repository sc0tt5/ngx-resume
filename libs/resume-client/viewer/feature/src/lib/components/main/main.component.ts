import { Component, input } from '@angular/core';

import { ListType, Section } from '@resume/shared/types';

@Component({
  selector: '[resFtViewerMain]',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  readonly sections = input.required<Section[]>();

  readonly listTypeExperience = ListType.EXPERIENCE;
  readonly listTypeIntro = ListType.INTRO;
}
