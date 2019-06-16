import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { Resume } from './core/model/resume.model';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ResumeService } from './services/resume.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RatingComponent } from './sidebar/rating/rating.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let resumeService: ResumeService;
    const mockResume: Resume = new Resume();
    let spy: any;
    let injector;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [
                AppComponent,
                HeaderComponent,
                MainComponent,
                RatingComponent,
                SidebarComponent
            ],
            providers: [ResumeService, Title]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        injector = getTestBed();
    }));

    beforeEach(() => {
        // get service
        resumeService = fixture.debugElement.injector.get(ResumeService);
        // return test data
        spy = spyOn(resumeService, 'getResume').and.returnValue(of(mockResume));
    });

    it('should be created successfully', () => {
        expect(component).toBeDefined();
    });

    it('getResume should return the resume data', () => {
        component.getResume().subscribe(resume => {
            expect(resume).toEqual(mockResume);
        });
    });
});
