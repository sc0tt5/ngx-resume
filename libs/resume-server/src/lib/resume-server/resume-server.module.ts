import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ResumeServerController } from './resume-server.controller';
import { ResumeServerService } from './resume-server.service';

@Module({
  imports: [HttpModule],
  controllers: [ResumeServerController],
  providers: [ResumeServerService]
})
export class ResumeServerModule {}
