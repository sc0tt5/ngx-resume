import { TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { resumeActions } from './viewer.actions';
import { ViewerFacade } from './viewer.facade';

describe('ViewerFacade', () => {
  let store: Store;
  let service: ViewerFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewerFacade, provideMockStore()]
    });

    store = TestBed.inject(Store);
    service = TestBed.inject(ViewerFacade);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('loadResume', () => {
    it('should dispatch the loadResume action', () => {
      jest.spyOn(store, 'dispatch');
      service.loadResume();
      expect(store.dispatch).toHaveBeenCalledWith(resumeActions.loadResume());
    });
  });
});
