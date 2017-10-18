import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityShedComponent } from './community-shed.component';

describe('CommunityShedComponent', () => {
  let component: CommunityShedComponent;
  let fixture: ComponentFixture<CommunityShedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityShedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityShedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
