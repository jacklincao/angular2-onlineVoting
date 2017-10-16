import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseWinteamComponent } from './choose-winteam.component';

describe('ChooseWinteamComponent', () => {
  let component: ChooseWinteamComponent;
  let fixture: ComponentFixture<ChooseWinteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseWinteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseWinteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
