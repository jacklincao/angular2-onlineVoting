import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseImpressionComponent } from './choose-impression.component';

describe('ChooseImpressionComponent', () => {
  let component: ChooseImpressionComponent;
  let fixture: ComponentFixture<ChooseImpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseImpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseImpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
