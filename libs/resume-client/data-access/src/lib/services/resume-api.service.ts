import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { Resume } from '@ngx-resume/shared/models';

import { ResourceService } from './resource.service';

const RESUME_API = '/api/resume';
const RESUME_VIEWER = 'viewer';

@Injectable({ providedIn: 'root' })
export class ResumeApiService extends ResourceService<Resume> {
  constructor(
    @Inject(PLATFORM_ID) protected platformId: unknown,
    protected httpClient: HttpClient,
    protected transferState: TransferState
  ) {
    super(platformId, httpClient, transferState, RESUME_API, RESUME_VIEWER);
  }
}
