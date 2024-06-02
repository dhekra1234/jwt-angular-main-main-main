import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlLinkIndepComponent } from './url-link-indep.component';

describe('UrlLinkIndepComponent', () => {
  let component: UrlLinkIndepComponent;
  let fixture: ComponentFixture<UrlLinkIndepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlLinkIndepComponent]
    });
    fixture = TestBed.createComponent(UrlLinkIndepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
