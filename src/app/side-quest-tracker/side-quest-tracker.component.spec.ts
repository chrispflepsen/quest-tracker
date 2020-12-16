import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideQuestTrackerComponent } from './side-quest-tracker.component';

describe('SideQuestTrackerComponent', () => {
  let component: SideQuestTrackerComponent;
  let fixture: ComponentFixture<SideQuestTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideQuestTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideQuestTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
