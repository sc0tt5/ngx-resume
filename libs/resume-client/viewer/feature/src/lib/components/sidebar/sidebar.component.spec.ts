import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockSidebar } from '@resume/shared/types';

import { RatingComponent } from '../rating/rating.component';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidebarComponent, RatingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.header = mockSidebar.header;
    component.sections = mockSidebar.sections;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement as HTMLElement;
  });

  it('should render section titles', () => {
    expect(nativeElement.querySelector('h2')?.textContent).toContain(mockSidebar.sections[0].title);
  });
});
