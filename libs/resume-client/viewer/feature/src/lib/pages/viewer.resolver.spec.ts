import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { Resume } from '@resume/shared/types';

import { resolveViewer } from './viewer.resolver';

describe('resolveViewer', () => {
  const executeResolver: ResolveFn<Resume> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => resolveViewer(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
