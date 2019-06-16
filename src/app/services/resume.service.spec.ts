import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { async, getTestBed, TestBed } from '@angular/core/testing';
import { Resume } from './../core/model/resume.model';
import { ResumeService } from './resume.service';

describe('ResumeService', () => {
    let injector;
    let service: ResumeService;
    let httpMock: HttpTestingController;
    const mockResume: Resume = new Resume();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ResumeService]
        });

        injector = getTestBed();
        service = injector.get(ResumeService);
        httpMock = injector.get(HttpTestingController);
    }));

    it('getResume should return an Observable<Resume>', () => {
        service.getResume().subscribe(resume => {
            expect(resume).toEqual(mockResume);
        });

        const resumeRequest = httpMock.expectOne(service.api);
        expect(resumeRequest.request.method).toBe('GET');
        resumeRequest.flush(mockResume);
    });

    afterEach(() => {
        httpMock.verify();
    });
});
