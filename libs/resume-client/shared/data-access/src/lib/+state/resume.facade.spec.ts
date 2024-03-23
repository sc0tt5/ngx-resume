import { TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { resumeActions } from './resume.actions';
import { ResumeFacade } from './resume.facade';

describe('ResumeFacade', () => {
  let store: Store;
  let service: ResumeFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeFacade, provideMockStore()]
    });

    store = TestBed.inject(Store);
    service = TestBed.inject(ResumeFacade);
  });

  describe('loadResume', () => {
    it('should dispatch the loadResume action', () => {
      jest.spyOn(store, 'dispatch');
      service.loadResume();
      expect(store.dispatch).toHaveBeenCalledWith(resumeActions.loadResume());
    });
  });
});
