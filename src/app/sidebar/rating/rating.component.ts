import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
    dots: Array<any> = [];

    @Input() rating: number;
    @Input() max: number;

    ngOnInit() {
        this.buildDots();
    }

    // TODO: unit test for rating component
    buildDots() {
        interval(0)
            .pipe(take(this.max))
            .subscribe(i => this.dots.push(i + 1 <= this.rating ? 'active' : 'inactive'));
    }
}
