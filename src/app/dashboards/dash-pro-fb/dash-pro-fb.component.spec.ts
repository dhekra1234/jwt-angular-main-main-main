import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProFbComponent } from './dash-pro-fb.component';

describe('DashProFbComponent', () => {
  let component: DashProFbComponent;
  let fixture: ComponentFixture<DashProFbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashProFbComponent]
    });
    fixture = TestBed.createComponent(DashProFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
