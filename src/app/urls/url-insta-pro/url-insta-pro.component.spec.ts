import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlInstaProComponent } from './url-insta-pro.component';

describe('UrlInstaProComponent', () => {
  let component: UrlInstaProComponent;
  let fixture: ComponentFixture<UrlInstaProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlInstaProComponent]
    });
    fixture = TestBed.createComponent(UrlInstaProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
