import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockHeader } from '@ngx-resume/shared/models';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.header = mockHeader;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render title', () => {
    expect(nativeElement.querySelector('h1').textContent).toContain(mockHeader.name);
  });
});
