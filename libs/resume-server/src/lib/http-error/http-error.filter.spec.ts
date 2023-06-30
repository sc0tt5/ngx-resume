import { ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { Request, Response } from 'express';

import { HttpErrorFilter } from './http-error.filter';

const request = { method: 'GET', url: '/test' } as Request;
const responseStatus = (status: number) => {
  response.statusCode = status;
  return response;
};
const response = { status: responseStatus, json: jest.fn() } as unknown as Response;
const argumentsHost = {
  switchToHttp: () => ({
    getRequest: () => request,
    getResponse: () => response
  })
} as ArgumentsHost;

describe('HttpErrorFilter', () => {
  let filter: HttpErrorFilter;
  let logger: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpErrorFilter]
    }).compile();

    logger = jest.spyOn(Logger, 'error');
    filter = module.get(HttpErrorFilter);
  });

  it('should log the error', () => {
    const exception = new HttpException({ message: 'test' }, HttpStatus.BAD_REQUEST);
    filter.catch(exception, argumentsHost);
    expect(logger).toHaveBeenCalledTimes(1);
  });
});
