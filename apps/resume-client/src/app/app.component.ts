/* eslint-disable rxjs-angular/prefer-takeuntil */
/* eslint-disable rxjs-angular/prefer-async-pipe */

import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { filter, take } from 'rxjs';

import { ViewerService } from '@client/data-access';

@Component({
  selector: 'res-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private readonly titleService = inject(Title);
  private readonly viewer = inject(ViewerService);

  ngOnInit(): void {
    this.subscribeToFullName();
  }

  private subscribeToFullName(): void {
    this.viewer.fullName$
      .pipe(
        filter(fullName => !!fullName),
        take(1)
      )
      .subscribe(fullName => this.titleService.setTitle(`Resume - ${fullName}`));
  }
}
