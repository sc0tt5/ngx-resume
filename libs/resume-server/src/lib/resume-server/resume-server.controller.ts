import { Controller, Get } from '@nestjs/common';

import { map, Observable } from 'rxjs';

import { Resume } from '@shared/models';

import { ResumeServerService } from './resume-server.service';

@Controller('resume')
export class ResumeServerController {
  constructor(private readonly resume: ResumeServerService) {}

  @Get()
  find(): Observable<Resume> {
    return this.resume.find().pipe(map(resume => resume));
  }
}
