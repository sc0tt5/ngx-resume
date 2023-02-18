import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { ResumeStoreModule } from '@ngx-resume/client/data-access';

import { environment } from '../environments/environment';

export const metaReducers: MetaReducer<unknown>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  imports: [
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    ResumeStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class AppStoreModule {}
