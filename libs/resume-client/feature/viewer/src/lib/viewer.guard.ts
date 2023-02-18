import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { filter, Observable, take } from 'rxjs';

import { ViewerService } from '@ngx-resume/client/data-access';

@Injectable({ providedIn: 'root' })
export class ViewerGuard implements CanActivate {
  constructor(private readonly viewer: ViewerService) {}

  canActivate(): Observable<boolean> {
    this.viewer.loadResume();
    return this.waitForCollectionToLoad();
  }

  private waitForCollectionToLoad(): Observable<boolean> {
    return this.viewer.loaded$.pipe(
      filter(loaded => loaded),
      take(1)
    );
  }
}
