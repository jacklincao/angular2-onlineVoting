import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDebateComponent } from './first-debate.component';

describe('FirstDebateComponent', () => {
  let component: FirstDebateComponent;
  let fixture: ComponentFixture<FirstDebateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDebateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
