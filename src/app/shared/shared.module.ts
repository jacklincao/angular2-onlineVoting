import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountDownComponent} from "./count-down/count-down.component";
import { WebsocketServiceComponent } from './websocket-service/websocket-service.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WebsocketServiceComponent]
})
export class SharedModule { }
