import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { LoggerController } from './logger.controller';

describe('LoggerController', () => {
  let controller: LoggerController;
  let logger: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoggerController]
    }).compile();

    controller = module.get<LoggerController>(LoggerController);
    logger = jest.spyOn(Logger, 'error');
  });

  it('should log the error to the console', () => {
    const error = 'test';

    controller.logError(error);
    expect(logger).toHaveBeenCalledWith(error, undefined, 'ClientError');
  });
});
