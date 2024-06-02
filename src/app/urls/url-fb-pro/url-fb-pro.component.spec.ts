import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFbProComponent } from './url-fb-pro.component';

describe('UrlFbProComponent', () => {
  let component: UrlFbProComponent;
  let fixture: ComponentFixture<UrlFbProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlFbProComponent]
    });
    fixture = TestBed.createComponent(UrlFbProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
