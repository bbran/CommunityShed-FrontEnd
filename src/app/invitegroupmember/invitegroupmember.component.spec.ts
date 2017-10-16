import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitegroupmemberComponent } from './invitegroupmember.component';

describe('InvitegroupmemberComponent', () => {
  let component: InvitegroupmemberComponent;
  let fixture: ComponentFixture<InvitegroupmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitegroupmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitegroupmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
