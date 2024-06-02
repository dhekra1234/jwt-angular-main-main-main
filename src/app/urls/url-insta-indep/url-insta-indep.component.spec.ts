import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlInstaIndepComponent } from './url-insta-indep.component';

describe('UrlInstaIndepComponent', () => {
  let component: UrlInstaIndepComponent;
  let fixture: ComponentFixture<UrlInstaIndepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlInstaIndepComponent]
    });
    fixture = TestBed.createComponent(UrlInstaIndepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
