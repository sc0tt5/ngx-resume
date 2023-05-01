import { Controller, Get } from '@nestjs/common';

import { map, Observable } from 'rxjs';

import { CoverLetter, Resume } from '@shared/models';

import { ResumeServerService } from './resume-server.service';

@Controller()
export class ResumeServerController {
  constructor(private readonly resume: ResumeServerService) {}

  @Get('cover-letter')
  findCoverLetter(): Observable<CoverLetter> {
    return this.resume.findCoverLetter().pipe(map(resume => resume));
  }

  @Get('resume')
  findResume(): Observable<Resume> {
    return this.resume.findResume().pipe(map(resume => resume));
  }
}
