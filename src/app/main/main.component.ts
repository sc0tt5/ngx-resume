import { Component, Input } from '@angular/core';
import { Section } from './../core/model/section.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    @Input() intro: string;
    @Input() sections: Section[];
}
