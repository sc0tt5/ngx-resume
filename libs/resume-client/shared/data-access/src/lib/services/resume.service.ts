import { Provider } from '@angular/core';

import { Observable } from 'rxjs';

import { Resume } from '@resume/shared/types';

import { ResumeFacade } from '../+state/resume.facade';

export abstract class ResumeService {
  abstract fullName$: Observable<string>;
  abstract resume$: Observable<Resume>;
  abstract loaded$: Observable<boolean>;
  abstract loadResume(): void;
}

export const RESUME_PROVIDER: Provider = { provide: ResumeService, useClass: ResumeFacade };
