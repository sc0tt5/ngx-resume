import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';

import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const stack = exception.stack;

    const errorResponse = {
      code: status,
      timestamp: new Date().toUTCString(),
      path: request.url,
      method: request.method,
      message: exception.message
    };

    Logger.error(errorResponse, stack, 'ExceptionFilter');
    response.status(status).json(errorResponse);
  }
}
