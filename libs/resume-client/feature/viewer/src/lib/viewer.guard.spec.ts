import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { ViewerService } from '@client/data-access';

import { ViewerGuard } from './viewer.guard';

describe('ViewerGuard', () => {
  let guard: ViewerGuard;
  let viewerService: ViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewerGuard,
        {
          provide: ViewerService,
          useFactory: () => ({ loaded$: of(true), loadResume: jest.fn() })
        }
      ]
    });

    guard = TestBed.inject(ViewerGuard);
    viewerService = TestBed.inject(ViewerService);
  });

  describe('canActivate', () => {
    it('should call loadResume on the ViewerService', () => {
      jest.spyOn(viewerService, 'loadResume');
      guard.canActivate().subscribe();
      expect(viewerService.loadResume).toHaveBeenCalled();
    });

    it('should return true after the resume has loaded', () => {
      let result: boolean;
      guard.canActivate().subscribe(canActivate => (result = canActivate));

      expect(result).toEqual(true);
    });

    it('should return false when the resume has not loaded', () => {
      let result: boolean;
      viewerService.loaded$ = of(false);
      guard.canActivate().subscribe(canActivate => (result = canActivate));

      expect(result).toBeFalsy();
    });
  });
});
