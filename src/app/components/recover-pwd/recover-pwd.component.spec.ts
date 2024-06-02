import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPwdComponent } from './recover-pwd.component';

describe('RecoverPwdComponent', () => {
  let component: RecoverPwdComponent;
  let fixture: ComponentFixture<RecoverPwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverPwdComponent]
    });
    fixture = TestBed.createComponent(RecoverPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
