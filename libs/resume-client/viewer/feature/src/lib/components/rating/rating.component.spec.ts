import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RatingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.rating = 3;
    component.max = 5;
    fixture.detectChanges();
  });

  it('should render the rating with the right active state', fakeAsync(() => {
    const ratingPercent = fixture.debugElement.queryAll(By.css('.skill-level'));
    const styleWidth = ratingPercent[0].nativeNode.style.width;
    expect(styleWidth).toEqual(`${(component.rating / component.max) * 100}%`);
  }));
});
