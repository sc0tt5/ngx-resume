import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PLATFORM_ID, StateKey, TransferState, inject, makeStateKey } from '@angular/core';
import { Params } from '@angular/router';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class ResourceService<T> {
  private isBrowser: boolean;
  private itemKey: StateKey<T>;

  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly transferState = inject(TransferState);

  constructor(private endpoint: string, private itemKeyName?: string) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.itemKey = makeStateKey<T>(itemKeyName);
  }

  read(params?: Params, path?: string): Observable<T | undefined> {
    if (this.getFromApi()) {
      return this.http.get(`${this.endpoint}${path ? '/' + path : ''}`, params ? { params } : {}).pipe(
        tap((data: T) => {
          if (!this.isBrowser) {
            this.transferState.set<T>(this.itemKey, data);
          }
          return data;
        }),
        catchError((error: HttpErrorResponse) => this.handleError(error))
      );
    } else {
      const item = this.transferState.get<T | undefined>(this.itemKey, undefined);
      this.transferState.remove<T>(this.itemKey);
      return of(item);
    }
  }

  private getFromApi(): boolean {
    return !this.isBrowser || (this.isBrowser && !this.transferState.hasKey<T>(this.itemKey));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => new HttpErrorResponse(error)); // NGXLogger will automatically trigger here
  }
}
