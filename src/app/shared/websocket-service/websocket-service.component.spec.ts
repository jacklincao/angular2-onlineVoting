import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketServiceComponent } from './websocket-service.component';

describe('WebsocketServiceComponent', () => {
  let component: WebsocketServiceComponent;
  let fixture: ComponentFixture<WebsocketServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocketServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
