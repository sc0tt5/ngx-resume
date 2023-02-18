import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req: Request = context.switchToHttp().getRequest();
    const contextName = context.getClass().name;
    const now = Date.now();

    return next.handle().pipe(
      take(1),
      tap(() => this.logRequest(req, now, contextName))
    );
  }

  private logRequest(req: Request, now: number, contextName: string): void {
    const message = `${req.method} ${req.url} ${Date.now() - now}ms`;
    this.logger.log(message, contextName);
  }
}
