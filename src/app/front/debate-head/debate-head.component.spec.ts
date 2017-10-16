import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateHeadComponent } from './debate-head.component';

describe('DebateHeadComponent', () => {
  let component: DebateHeadComponent;
  let fixture: ComponentFixture<DebateHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebateHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebateHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
