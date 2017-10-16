import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthDebateComponent } from './forth-debate.component';

describe('ForthDebateComponent', () => {
  let component: ForthDebateComponent;
  let fixture: ComponentFixture<ForthDebateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthDebateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
