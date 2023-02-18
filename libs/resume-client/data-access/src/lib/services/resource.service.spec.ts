import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';

import { of, throwError } from 'rxjs';

import { Item, mockApi, mockItem, MockService } from './resource.service.mock';

const testParams = { test: true };
const testPath = 'test';

describe('ResourceService', () => {
  let httpClient: HttpClient;
  let transferState: TransferState;
  let service: MockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MockService, TransferState]
    });

    httpClient = TestBed.inject(HttpClient);
    transferState = TestBed.inject(TransferState);
    service = TestBed.inject(MockService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should create', () => {
    expect(service).toBeDefined();
  });

  describe('Server-Side', () => {
    it('should get data from API and set transfer state', () => {
      jest.spyOn(httpClient, 'get').mockReturnValue(of(mockItem));
      jest.spyOn(transferState, 'set');

      let result: Item;
      service.isBrowser = false;

      service.read(testParams, testPath).subscribe(data => (result = data));

      expect(httpClient.get).toHaveBeenCalledWith(`${mockApi}/${testPath}`, { params: testParams });
      expect(transferState.set).toHaveBeenCalledWith(service.itemKey, mockItem);
      expect(result).toEqual(mockItem);
    });

    it('should handle errors from the API', () => {
      jest.spyOn(httpClient, 'get').mockReturnValue(throwError(() => new HttpErrorResponse({ error: 'test' })));

      let result: HttpErrorResponse;
      service.isBrowser = false;

      service.read().subscribe({
        next: () => undefined,
        error: (error: HttpErrorResponse) => (result = error)
      });

      expect(result.error).toEqual('test');
    });
  });

  describe('Client-Side', () => {
    it('should get existing item from TransferState', () => {
      jest.spyOn(httpClient, 'get');
      jest.spyOn(transferState, 'get');
      service['transferState'].set(service.itemKey, mockItem);

      let result: Item;
      service.isBrowser = true;

      service.read().subscribe(data => {
        result = data;
      });

      expect(result).toEqual(mockItem);
      expect(transferState.get).toHaveBeenCalledWith(service.itemKey, undefined);
      expect(httpClient.get).not.toHaveBeenCalled();
    });
  });
});
