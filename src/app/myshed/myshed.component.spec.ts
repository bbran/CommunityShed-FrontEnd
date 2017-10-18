import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshedComponent } from './myshed.component';

describe('MyshedComponent', () => {
  let component: MyshedComponent;
  let fixture: ComponentFixture<MyshedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyshedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
