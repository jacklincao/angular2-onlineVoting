import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdDebateComponent } from './third-debate.component';

describe('ThirdDebateComponent', () => {
  let component: ThirdDebateComponent;
  let fixture: ComponentFixture<ThirdDebateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdDebateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
