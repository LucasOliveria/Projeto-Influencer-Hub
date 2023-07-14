import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddInfluencerComponent } from './form-add-influencer.component';

describe('FormAddInfluencerComponent', () => {
  let component: FormAddInfluencerComponent;
  let fixture: ComponentFixture<FormAddInfluencerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddInfluencerComponent]
    });
    fixture = TestBed.createComponent(FormAddInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
