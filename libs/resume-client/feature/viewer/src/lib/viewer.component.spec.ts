import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerService } from '@ngx-resume/client/data-access';

import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;
  let viewerService: ViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerComponent],
      providers: [ViewerService]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    viewerService = TestBed.inject(ViewerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign observables from viewer service to local properties', () => {
    component.ngOnInit();

    expect(component.header$).toEqual(viewerService.header$);
    expect(component.intro$).toEqual(viewerService.intro$);
    expect(component.sections$).toEqual(viewerService.sections$);
    expect(component.sidebar$).toEqual(viewerService.sidebar$);
    expect(component.loaded$).toEqual(viewerService.loaded$);
  });
});
