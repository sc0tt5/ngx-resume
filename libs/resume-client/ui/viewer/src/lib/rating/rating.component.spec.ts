import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RatingComponent } from './rating.component';

const ACTIVE = 'active';
const INACTIVE = 'inactive';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.rating = 3;
    component.max = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should build the dots array with the right values and length', () => {
    expect(component.dots$.getValue().length).toEqual(5);
    expect(component.dots$.getValue()).toEqual([ACTIVE, ACTIVE, ACTIVE, INACTIVE, INACTIVE]);
  });

  it('should render the rating with the right active state', fakeAsync(() => {
    const dotElements = fixture.debugElement.queryAll(By.css('.dot'));
    const activeDotElements = fixture.debugElement.queryAll(By.css('.active'));
    const inactiveDotElements = fixture.debugElement.queryAll(By.css('.inactive'));

    expect(dotElements.length).toEqual(component.max);
    expect(activeDotElements.length).toEqual(component.rating);
    expect(inactiveDotElements.length).toEqual(component.max - component.rating);
  }));
});
