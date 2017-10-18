import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitenewuserComponent } from './invitenewuser.component';

describe('InvitenewuserComponent', () => {
  let component: InvitenewuserComponent;
  let fixture: ComponentFixture<InvitenewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitenewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitenewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
