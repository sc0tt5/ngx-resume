import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockSection } from '@ngx-resume/shared/models';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    component.sections = [mockSection];
    fixture.detectChanges();
    nativeElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render section title', () => {
    expect(nativeElement.querySelector('h2').textContent).toContain(mockSection.title);
  });

  it('should render section list titles', () => {
    expect(nativeElement.querySelector('h3').textContent).toContain(mockSection.list[0].title);
  });
});
