import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockSidebar } from '@ngx-resume/shared/models';

import { RatingComponent } from '../rating/rating.component';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent, RatingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.sections = [mockSidebar];
    fixture.detectChanges();
    nativeElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render section titles', () => {
    expect(nativeElement.querySelector('h2').textContent).toContain(mockSidebar.title);
  });
});