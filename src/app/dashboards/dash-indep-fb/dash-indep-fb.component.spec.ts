import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashIndepFbComponent } from './dash-indep-fb.component';

describe('DashIndepFbComponent', () => {
  let component: DashIndepFbComponent;
  let fixture: ComponentFixture<DashIndepFbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashIndepFbComponent]
    });
    fixture = TestBed.createComponent(DashIndepFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
