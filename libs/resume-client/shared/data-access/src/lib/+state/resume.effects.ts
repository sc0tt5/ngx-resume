import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { ResumeApiService } from '../services/resume-api.service';

import { resumeActions } from './resume.actions';

@Injectable()
export class ResumeEffects {
  private readonly actions$ = inject(Actions);
  private readonly resumeApiService = inject(ResumeApiService);

  private readonly loadResume$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resumeActions.loadResume),
      switchMap(() =>
        this.resumeApiService.read().pipe(
          map(resume => resumeActions.loadResumeSuccess({ resume })),
          catchError(error => of(resumeActions.loadResumeFail({ error })))
        )
      )
    )
  );
}
