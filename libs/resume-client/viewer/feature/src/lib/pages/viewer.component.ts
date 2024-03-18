import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ResumeService } from '@resume/shared/data-access';

import { MainComponent } from '../components/main/main.component';
import { RatingComponent } from '../components/rating/rating.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, MainComponent, NgIf, RatingComponent, SidebarComponent],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewerComponent {
  private readonly resume = inject(ResumeService);
  readonly loaded$ = this.resume.loaded$;
  readonly resume$ = this.resume.resume$;
}
