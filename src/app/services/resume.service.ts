import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { Resume } from './../core/model/resume.model';

@Injectable()
export class ResumeService {
    api: string;

    constructor(private http: HttpClient) {
        this.api = 'http://localhost:3000/resume';
    }

    getResume(): Observable<Resume> {
        return this.http
            .get<Resume>(this.api)
            .pipe(catchError((error: any) => throwError(error)));
    }
}
