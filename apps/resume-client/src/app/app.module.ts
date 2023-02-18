import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { LoggerModule } from 'ngx-logger';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AppStoreModule } from './app.store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'resume-client' }),
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `${environment.apiUrl}/log`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: environment.disableConsoleLogging
    }),
    AppStoreModule,
    TransferHttpCacheModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
