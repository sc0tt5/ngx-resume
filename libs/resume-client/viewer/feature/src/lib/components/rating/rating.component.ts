import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgStyle],
  selector: '[resFtViewerRating]',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
  @Input({ required: true }) max = 10;
  @Input({ required: true }) name = '';
  @Input({ required: true }) rating = 0;

  @HostBinding('class') private readonly hostClasses = 'pb-3';
}
