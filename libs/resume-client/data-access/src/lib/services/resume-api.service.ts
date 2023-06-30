import { Injectable } from '@angular/core';

import { Resume } from '@shared/models';

import { ResourceService } from './resource.service';

const RESUME_API = '/api/resume';
const RESUME_VIEWER = 'viewer';

@Injectable({ providedIn: 'root' })
export class ResumeApiService extends ResourceService<Resume> {
  constructor() {
    super(RESUME_API, RESUME_VIEWER);
  }
}
