import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndepInstaComponent } from './dashboard-indep-insta.component';

describe('DashboardIndepInstaComponent', () => {
  let component: DashboardIndepInstaComponent;
  let fixture: ComponentFixture<DashboardIndepInstaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardIndepInstaComponent]
    });
    fixture = TestBed.createComponent(DashboardIndepInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
