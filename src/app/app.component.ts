import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Resume } from './core/model/resume.model';
import { ResumeService } from './services/resume.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    resume$: Observable<Resume>;

    constructor(private service: ResumeService, private titleService: Title) {}

    ngOnInit() {
        // get resume data
        this.resume$ = this.getResume();
        // set the page title (not using router moduel)
        this.resume$.subscribe(resume => this.titleService.setTitle(resume.header.name));
    }

    getResume(): Observable<Resume> {
        return this.service.getResume();
    }
}
