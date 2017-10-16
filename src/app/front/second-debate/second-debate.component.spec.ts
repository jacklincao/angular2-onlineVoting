import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDebateComponent } from './second-debate.component';

describe('SecondDebateComponent', () => {
  let component: SecondDebateComponent;
  let fixture: ComponentFixture<SecondDebateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondDebateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
