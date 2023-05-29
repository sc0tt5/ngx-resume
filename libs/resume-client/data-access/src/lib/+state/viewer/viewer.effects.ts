import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { NGXLogger } from 'ngx-logger';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ResumeApiService } from '../../services/resume-api.service';

import { resumeActions } from './viewer.actions';

@Injectable()
export class ResumeEffects {
  loadResume$: Observable<Action>;

  constructor(
    private readonly actions$: Actions,
    private readonly resumeApiService: ResumeApiService,
    private readonly log: NGXLogger
  ) {
    this.loadResume$ = this.loadResume();
  }

  private loadResume(): Observable<Action> {
    return createEffect(() =>
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
}
