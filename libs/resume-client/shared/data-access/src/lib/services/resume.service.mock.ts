import { Provider } from '@angular/core';

import { of } from 'rxjs';

import { mockHeader, mockResume } from '@resume/shared/types';

import { ResumeService } from './resume.service';

class MockResumeService implements ResumeService {
  fullName$ = of(`${mockHeader.firstname} ${mockHeader.firstname}`);
  resume$ = of(mockResume);
  loaded$ = of(true);
  loadResume(): void {
    return;
  }
}

export const VIEWER_PROVIDER_TEST: Provider = { provide: ResumeService, useClass: MockResumeService };
