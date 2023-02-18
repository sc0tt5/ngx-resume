import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { Params } from '@angular/router';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class ResourceService<T> {
  public itemKey: StateKey<T>;
  public itemsKey: StateKey<T[]>;
  public isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) protected platformId: unknown,
    protected http: HttpClient,
    protected transferState: TransferState,
    private endpoint: string,
    private itemKeyName?: string
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.itemKey = makeStateKey<T>(itemKeyName || '');
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
