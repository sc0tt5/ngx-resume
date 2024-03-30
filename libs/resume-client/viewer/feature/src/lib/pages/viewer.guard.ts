import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { filter, take } from 'rxjs';

import { ResumeService } from '@resume/shared/data-access';

export const canActivateViewer: CanActivateFn = () => {
  const resume = inject(ResumeService);
  resume.loadResume();
  return resume.loaded$.pipe(
    filter(loaded => loaded),
    take(1)
  );
};
