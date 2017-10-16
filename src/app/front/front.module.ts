import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontComponent} from './front.component';
import {ChooseImpressionComponent} from './choose-impression/choose-impression.component';
import {FrontRoutingsModule} from "./front-routings.module";
import {ChooseWinteamComponent} from './choose-winteam/choose-winteam.component';
import {ChooseDebaterComponent} from './choose-debater/choose-debater.component';
import {FirstDebateComponent} from './first-debate/first-debate.component';
import {SecondDebateComponent} from './second-debate/second-debate.component';
import {ThirdDebateComponent} from './third-debate/third-debate.component';
import {ForthDebateComponent} from './forth-debate/forth-debate.component';
import {NavComponent} from './nav/nav.component';
import {DebateHeadComponent} from './debate-head/debate-head.component';
import {CountDownComponent} from '../shared/count-down/count-down.component';
import {DebateInfoComponent} from './debate-info/debate-info.component';
import {DebateServiceService} from "./debate-service/debate-service.service";
import {RouterModule} from "@angular/router";
import { DebaterPipePipe } from './pipe/debater-pipe.pipe';
import { EndComponent } from './end/end.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FrontRoutingsModule
  ],
  declarations: [
    FrontComponent,
    ChooseImpressionComponent,
    ChooseWinteamComponent,
    ChooseDebaterComponent,
    FirstDebateComponent,
    SecondDebateComponent,
    ThirdDebateComponent,
    ForthDebateComponent,
    NavComponent,
    DebateHeadComponent,
    CountDownComponent,
    DebateInfoComponent,
    DebaterPipePipe,
    EndComponent
  ],
  providers: [
    DebateServiceService
  ]
})
export class FrontModule {

}

