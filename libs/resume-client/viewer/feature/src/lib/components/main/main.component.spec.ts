import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockSection } from '@resume/shared/types';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    fixture.componentRef.setInput('sections', [mockSection]);
    fixture.detectChanges();
    nativeElement = fixture.nativeElement as HTMLElement;
  });

  it('should render section title', () => {
    expect(nativeElement.querySelector('h2')?.textContent).toContain(mockSection.title);
  });
});
