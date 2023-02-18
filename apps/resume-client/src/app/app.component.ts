import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'res-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
