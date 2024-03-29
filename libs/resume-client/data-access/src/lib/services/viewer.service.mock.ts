import { Provider } from '@angular/core';

import { of } from 'rxjs';

import { mockHeader, mockSidebar, mockMain } from '@shared/models';

import { ViewerService } from './viewer.service';

class MockViewerService implements ViewerService {
  fullName$ = of(`${mockHeader.firstname} ${mockHeader.firstname}`);
  header$ = of(mockHeader);
  mainSections$ = of(mockMain.sections);
  sidebarSections$ = of(mockSidebar.sections);
  loaded$ = of(true);
  loadResume(): void {
    return;
  }
}

export const VIEWER_PROVIDER_TEST: Provider = { provide: ViewerService, useClass: MockViewerService };
