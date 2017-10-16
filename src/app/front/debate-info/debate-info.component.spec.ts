import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateInfoComponent } from './debate-info.component';

describe('DebateInfoComponent', () => {
  let component: DebateInfoComponent;
  let fixture: ComponentFixture<DebateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
