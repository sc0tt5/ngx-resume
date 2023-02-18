import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, Provider } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

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
  constructor(
    @Inject(PLATFORM_ID) protected platformId: unknown,
    protected httpClient: HttpClient,
    protected transferState: TransferState
  ) {
    super(platformId, httpClient, transferState, mockApi, mockStateKey);
  }
}

export const resourceProviderMock: Provider[] = [
  {
    provide: NGXLogger,
    useFactory: () => ({ error: (message: string) => message, warn: (message: string) => message })
  }
];
