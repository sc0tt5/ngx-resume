import { inject, Injectable } from '@angular/core';

import { filter, Observable, take } from 'rxjs';

import { ViewerService } from '@client/data-access';

@Injectable({ providedIn: 'root' })
export class ViewerGuard {
  private readonly viewer = inject(ViewerService);

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
