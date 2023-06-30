import { Injectable, Provider } from '@angular/core';

import { NGXLogger } from 'ngx-logger';

import { ResourceService } from './resource.service';

export interface Item {
  name: string;
}

export const mockItem = { name: 'test' };
export const mockApi = 'api/test';
export const mockStateKey = 'test';

@Injectable()
export class MockService extends ResourceService<Item> {
  constructor() {
    super(mockApi, mockStateKey);
  }
}

export const resourceProviderMock: Provider[] = [
  {
    provide: NGXLogger,
    useFactory: () => ({ error: (message: string) => message, warn: (message: string) => message })
  }
];
