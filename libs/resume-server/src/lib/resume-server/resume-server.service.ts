import { HttpService } from '@nestjs/axios';
import { Injectable, UseFilters } from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Resume } from '@ngx-resume/shared/models';

import { HttpErrorFilter } from '../http-error/http-error.filter';

@Injectable()
@UseFilters(new HttpErrorFilter())
export class ResumeServerService {
  private BASE_URL = 'http://localhost:8800'; // json-server db for demo purposes only

  constructor(private http: HttpService) {}

  find(): Observable<Resume> {
    return this.http.get<Resume>(`${this.BASE_URL}/resume`).pipe(map(response => response.data));
  }
}
