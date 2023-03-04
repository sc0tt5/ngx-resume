import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerService } from '@client/data-access';

import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerComponent],
      providers: [ViewerService]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
