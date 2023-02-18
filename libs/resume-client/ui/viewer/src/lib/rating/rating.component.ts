import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'res-ui-vi-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() max: number;

  dots$ = new BehaviorSubject([]);

  ngOnInit() {
    this.buildDots();
  }

  private buildDots() {
    this.dots$.next(Array.from({ length: this.max }, (_, i) => (i + 1 <= this.rating ? 'active' : 'inactive')));
  }
}
