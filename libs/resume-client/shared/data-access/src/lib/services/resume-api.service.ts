import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { Resume } from '@resume/shared/types';

const RESUME_API = 'http://localhost:8800/resume'; // json server

@Injectable({ providedIn: 'root' })
export class ResumeApiService {
  private readonly http = inject(HttpClient);

  read(): Observable<Resume> {
    return this.http.get<Resume>(RESUME_API);
  }
}
