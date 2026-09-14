import { inject, Injectable, signal } from '@angular/core';

import { Resume } from '@resume/shared/types';

import { catchError, EMPTY, finalize, Observable } from 'rxjs';
import { ResumeApiService } from './resume-api.service';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  readonly error = signal(false);
  readonly loaded = signal(false);

  private readonly resumeApiService = inject(ResumeApiService);

  loadResume$(): Observable<Resume> {
    return this.resumeApiService.read().pipe(
      catchError(() => {
        this.error.set(true);
        return EMPTY;
      }),
      finalize(() => this.loaded.set(true))
    );
  }
}
