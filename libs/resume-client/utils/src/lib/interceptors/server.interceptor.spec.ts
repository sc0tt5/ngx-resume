import { HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { ServerInterceptor } from './server.interceptor';

const mockHttpHandler: HttpHandler = { handle: jest.fn().mockReturnValue(of({})) };
const mockHttpRequest: HttpRequest<unknown> = new HttpRequest('GET', '/api/data');

describe('ServerInterceptor', () => {
  let interceptor: ServerInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServerInterceptor]
    }).compileComponents();

    interceptor = TestBed.inject(ServerInterceptor);
  });

  describe('with serverUrl', () => {
    it('should add the serverUrl to the request URL', () => {
      const serverUrl = 'test-server-url';
      const newUrl = `${serverUrl}${mockHttpRequest.url}`;

      interceptor['serverUrl'] = serverUrl;
      interceptor.intercept(mockHttpRequest, mockHttpHandler);

      expect(mockHttpHandler.handle).toHaveBeenCalledWith({
        ...mockHttpRequest,
        ...{ url: newUrl },
        ...{ urlWithParams: newUrl }
      });
    });
  });

  describe('without serverUrl', () => {
    it('should return the original request', () => {
      interceptor.intercept(mockHttpRequest, mockHttpHandler);
      expect(mockHttpHandler.handle).toHaveBeenCalledWith(mockHttpRequest);
    });
  });
});
