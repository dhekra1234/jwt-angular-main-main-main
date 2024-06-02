import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFbIndepComponent } from './url-fb-indep.component';

describe('UrlFbIndepComponent', () => {
  let component: UrlFbIndepComponent;
  let fixture: ComponentFixture<UrlFbIndepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlFbIndepComponent]
    });
    fixture = TestBed.createComponent(UrlFbIndepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
