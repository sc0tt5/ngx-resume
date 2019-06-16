import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingComponent } from './rating/rating.component';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent, RatingComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created successfully', () => {
        expect(component).toBeDefined();
    });
});
