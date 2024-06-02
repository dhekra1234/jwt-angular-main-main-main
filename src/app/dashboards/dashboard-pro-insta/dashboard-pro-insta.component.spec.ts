import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProInstaComponent } from './dashboard-pro-insta.component';

describe('DashboardProInstaComponent', () => {
  let component: DashboardProInstaComponent;
  let fixture: ComponentFixture<DashboardProInstaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProInstaComponent]
    });
    fixture = TestBed.createComponent(DashboardProInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
