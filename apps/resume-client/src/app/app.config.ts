import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { RESUME_STORE } from '@resume/shared/data-access';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideHttpClient(withFetch()), provideRouter(appRoutes), RESUME_STORE]
};
