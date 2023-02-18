import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {
  constructor(@Optional() @Inject('serverUrl') private serverUrl: string) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const serverReq = this.serverUrl ? req.clone({ url: `${this.serverUrl}${req.url}` }) : req;
    return next.handle(serverReq);
  }
}
