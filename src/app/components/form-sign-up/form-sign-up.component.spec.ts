import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSignUpComponent } from './form-sign-up.component';

describe('FormSignUpComponent', () => {
  let component: FormSignUpComponent;
  let fixture: ComponentFixture<FormSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSignUpComponent]
    });
    fixture = TestBed.createComponent(FormSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
