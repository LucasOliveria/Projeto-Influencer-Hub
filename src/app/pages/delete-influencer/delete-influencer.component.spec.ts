import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInfluencerComponent } from './delete-influencer.component';

describe('DeleteInfluencerComponent', () => {
  let component: DeleteInfluencerComponent;
  let fixture: ComponentFixture<DeleteInfluencerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteInfluencerComponent]
    });
    fixture = TestBed.createComponent(DeleteInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
