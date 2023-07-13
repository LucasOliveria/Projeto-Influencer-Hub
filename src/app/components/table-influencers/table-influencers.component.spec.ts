import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInfluencersComponent } from './table-influencers.component';

describe('TableInfluencersComponent', () => {
  let component: TableInfluencersComponent;
  let fixture: ComponentFixture<TableInfluencersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableInfluencersComponent]
    });
    fixture = TestBed.createComponent(TableInfluencersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
