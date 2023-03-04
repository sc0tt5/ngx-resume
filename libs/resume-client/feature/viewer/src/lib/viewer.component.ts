import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ViewerService } from '@client/data-access';
import { Header, Section } from '@shared/models';

@Component({
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewerComponent implements OnInit {
  header$: Observable<Header>;
  mainSections$: Observable<Section[]>;
  sidebarSections$: Observable<Section[]>;
  loaded$: Observable<boolean>;

  constructor(private readonly viewer: ViewerService) {}

  ngOnInit() {
    this.header$ = this.viewer.header$;
    this.mainSections$ = this.viewer.mainSections$;
    this.sidebarSections$ = this.viewer.sidebarSections$;
    this.loaded$ = this.viewer.loaded$;
  }
}
