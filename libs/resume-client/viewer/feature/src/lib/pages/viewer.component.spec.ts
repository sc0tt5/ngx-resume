import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VIEWER_PROVIDER_TEST } from '@resume/shared/data-access';
import { mockResume } from '@resume/shared/types';

import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewerComponent],
      providers: [VIEWER_PROVIDER_TEST]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('resume', mockResume);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
