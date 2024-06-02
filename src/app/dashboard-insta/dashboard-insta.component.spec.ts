import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInstaComponent } from './dashboard-insta.component';

describe('DashboardInstaComponent', () => {
  let component: DashboardInstaComponent;
  let fixture: ComponentFixture<DashboardInstaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardInstaComponent]
    });
    fixture = TestBed.createComponent(DashboardInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
