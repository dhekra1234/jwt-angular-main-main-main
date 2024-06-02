import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashInstaComponent } from './dash-insta.component';

describe('DashInstaComponent', () => {
  let component: DashInstaComponent;
  let fixture: ComponentFixture<DashInstaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashInstaComponent]
    });
    fixture = TestBed.createComponent(DashInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
