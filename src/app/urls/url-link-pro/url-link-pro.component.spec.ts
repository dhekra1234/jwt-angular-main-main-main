import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlLinkProComponent } from './url-link-pro.component';

describe('UrlLinkProComponent', () => {
  let component: UrlLinkProComponent;
  let fixture: ComponentFixture<UrlLinkProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlLinkProComponent]
    });
    fixture = TestBed.createComponent(UrlLinkProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
