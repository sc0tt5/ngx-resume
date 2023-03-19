import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { VIEWER_PROVIDER_TEST } from '@client/data-access';
import { mockHeader } from '@shared/models';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let title: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [VIEWER_PROVIDER_TEST, Title]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    title = TestBed.inject(Title);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('subscribeToFullName', () => {
    it('should update the meta title with first and last name', fakeAsync(() => {
      app.ngOnInit();
      tick();
      expect(title.getTitle()).toEqual(`Resume - ${mockHeader.firstname} ${mockHeader.firstname}`);
    }));
  });
});
