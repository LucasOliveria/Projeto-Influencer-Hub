import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditInfluencerComponent } from './form-edit-influencer.component';

describe('FormEditInfluencerComponent', () => {
  let component: FormEditInfluencerComponent;
  let fixture: ComponentFixture<FormEditInfluencerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditInfluencerComponent]
    });
    fixture = TestBed.createComponent(FormEditInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
