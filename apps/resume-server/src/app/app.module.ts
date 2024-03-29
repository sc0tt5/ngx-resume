import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

import { ApiModule } from '@server';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppServerModule } from '../../../resume-client/src/main.server';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/resume-client/browser')
    }),
    ApiModule
  ]
})
export class AppModule {}
