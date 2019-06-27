import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { Resume } from './core/model/resume.model';
import { ResumeService } from './services/resume.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    resume$: Observable<Resume>;
    subscription: Subscription;

    constructor(private service: ResumeService, private titleService: Title) {}

    ngOnInit() {
        // get resume data
        this.resume$ = this.getResume();
        // set the page title (not using router moduel)
        // this.resume$.subscribe(resume => this.titleService.setTitle(resume.header.name));
        this.subscription = this.resume$.subscribe(resume =>
            this.titleService.setTitle(resume.header.name)
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getResume(): Observable<Resume> {
        return this.service.getResume();
    }
}
