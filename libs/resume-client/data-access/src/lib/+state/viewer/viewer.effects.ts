import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ResumeApiService } from '../../services/resume-api.service';

import { resumeActions } from './viewer.actions';

@Injectable()
export class ResumeEffects {
  constructor(private actions$: Actions, private resumeApiService: ResumeApiService, private log: NGXLogger) {}

  loadResume$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resumeActions.loadResume),
      switchMap(() =>
        this.resumeApiService.read().pipe(
          map(resume => resumeActions.loadResumeSuccess({ resume })),
          catchError(error => {
            this.log.error(error);
            return of(resumeActions.loadResumeFail({ error }));
          })
        )
      )
    )
  );
}
