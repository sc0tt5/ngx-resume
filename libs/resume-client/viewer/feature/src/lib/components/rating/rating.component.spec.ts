import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('rating', 3);
    fixture.componentRef.setInput('max', 5);
    fixture.componentRef.setInput('name', 'Angular');
    fixture.detectChanges();
  });

  it('should render the rating with the right active state', () => {
    const ratingPercent = fixture.debugElement.queryAll(By.css('.skill-level'));
    const styleWidth = (ratingPercent[0].nativeElement as HTMLElement).style.width;

    expect(component).toBeTruthy();
    expect(styleWidth).toEqual('60%');
  });
});
