import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'res-ui-vi-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
  @Input() max: number;
  @Input() name: string;
  @Input() rating: number;

  @HostBinding('class') private readonly hostClasses = 'pb-3';
}
