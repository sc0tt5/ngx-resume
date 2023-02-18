import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ViewerService } from '@ngx-resume/client/data-access';
import { Header, Section, Sidebar } from '@ngx-resume/shared/models';

@Component({
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewerComponent implements OnInit {
  header$: Observable<Header>;
  intro$: Observable<string>;
  sections$: Observable<Section[]>;
  sidebar$: Observable<Sidebar[]>;
  loaded$: Observable<boolean>;

  constructor(private readonly viewer: ViewerService) {}

  ngOnInit() {
    this.header$ = this.viewer.header$;
    this.intro$ = this.viewer.intro$;
    this.sections$ = this.viewer.sections$;
    this.sidebar$ = this.viewer.sidebar$;
    this.loaded$ = this.viewer.loaded$;
  }
}
