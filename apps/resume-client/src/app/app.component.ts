/* eslint-disable rxjs-angular/prefer-takeuntil */
/* eslint-disable rxjs-angular/prefer-async-pipe */

import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { filter, take } from 'rxjs';

import { ResumeService } from '@resume/shared/data-access';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'ngx-resume-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private readonly titleService = inject(Title);
  private readonly resume = inject(ResumeService);

  ngOnInit(): void {
    this.subscribeToFullName();
  }

  private subscribeToFullName(): void {
    this.resume.fullName$
      .pipe(
        filter(fullName => !!fullName),
        take(1)
      )
      .subscribe(fullName => this.titleService.setTitle(`Resume - ${fullName}`));
  }
}
