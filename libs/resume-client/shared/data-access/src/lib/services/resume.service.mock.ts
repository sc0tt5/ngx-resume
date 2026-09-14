import { Provider, signal } from '@angular/core';

import { mockResume, Resume } from '@resume/shared/types';
import { Observable, of } from 'rxjs';
import { ResumeService } from './resume.service';

class MockResumeService {
  readonly error = signal<unknown>(null);
  readonly loaded = signal(true);

  loadResume$(): Observable<Resume> {
    return of(mockResume);
  }
}

export const VIEWER_PROVIDER_TEST: Provider = { provide: ResumeService, useClass: MockResumeService };
