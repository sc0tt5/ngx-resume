import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { ResumeService } from '@resume/shared/data-access';
import { Resume } from '@resume/shared/types';

export const resolveViewer: ResolveFn<Resume> = () => {
  const resume = inject(ResumeService);
  return resume.loadResume$();
};
