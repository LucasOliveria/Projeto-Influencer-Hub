import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfluencerComponent } from './add-influencer.component';

describe('AddInfluencerComponent', () => {
  let component: AddInfluencerComponent;
  let fixture: ComponentFixture<AddInfluencerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInfluencerComponent]
    });
    fixture = TestBed.createComponent(AddInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
