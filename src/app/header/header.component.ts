import { Component, Input } from '@angular/core';
import { Header } from './../core/model/header.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() header: Header;
}
