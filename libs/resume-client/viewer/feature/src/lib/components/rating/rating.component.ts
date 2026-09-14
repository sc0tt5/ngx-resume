import { Component, computed, input } from '@angular/core';

@Component({
  selector: '[resFtViewerRating]',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  host: { class: 'pb-3' }
})
export class RatingComponent {
  readonly max = input.required<number>();
  readonly name = input.required<string>();
  readonly rating = input.required<number>();

  readonly ratingWidth = computed(() => `${(this.rating() / this.max()) * 100}%`);
}
