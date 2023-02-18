import { Module } from '@nestjs/common';

import { HttpErrorModule } from './http-error/http-error.module';
import { LoggerModule } from './logger/logger.module';
import { ResumeServerModule } from './resume-server/resume-server.module';

@Module({
  imports: [HttpErrorModule, LoggerModule, ResumeServerModule]
})
export class ApiModule {}
