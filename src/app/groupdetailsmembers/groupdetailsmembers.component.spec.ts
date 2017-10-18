import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupdetailsmembersComponent } from './groupdetailsmembers.component';

describe('GroupdetailsmembersComponent', () => {
  let component: GroupdetailsmembersComponent;
  let fixture: ComponentFixture<GroupdetailsmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupdetailsmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupdetailsmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
