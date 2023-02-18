import { CallHandler, ExecutionContext, Logger } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { of } from 'rxjs';

import { LoggerInterceptor } from './logger.interceptor';

const mockExecutionContext = {
  getArgs: jest.fn(),
  getClass: jest.fn().mockReturnValue('test'),
  getType: jest.fn(),
  switchToRpc: jest.fn(),
  switchToHttp: () => ({
    getRequest: jest.fn().mockReturnValue({ method: 'GET', url: '/test' })
  })
} as unknown as ExecutionContext;

const now = Date.now();
const mockMessage = `GET /test ${Date.now() - now}ms`;
const mockCallHandler: CallHandler = { handle: () => of(mockMessage) };

describe('LoggerInterceptor', () => {
  let interceptor: LoggerInterceptor;
  let logger: Logger;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [Logger, LoggerInterceptor]
    }).compile();

    interceptor = module.get(LoggerInterceptor);
    logger = module.get(Logger);
  });

  describe('intercept', () => {
    it('should log method, url, and elapsed time', done => {
      jest.spyOn(logger, 'log');
      interceptor.intercept(mockExecutionContext, mockCallHandler).subscribe(() => {
        expect(logger.log).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});
