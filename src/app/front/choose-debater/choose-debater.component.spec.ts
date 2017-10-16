import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDebaterComponent } from './choose-debater.component';

describe('ChooseDebaterComponent', () => {
  let component: ChooseDebaterComponent;
  let fixture: ComponentFixture<ChooseDebaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDebaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDebaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
