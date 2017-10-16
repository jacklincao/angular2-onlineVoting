/**
 * 作者:林
 * 时间:2017/10/13ChooseWinteamComponent
 * 功能:前台展示的路由配置
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FrontComponent} from './front.component';
import {ChooseImpressionComponent} from './choose-impression/choose-impression.component';
import {ChooseWinteamComponent} from "./choose-winteam/choose-winteam.component";
import {ChooseDebaterComponent} from "./choose-debater/choose-debater.component";
import {FirstDebateComponent} from "./first-debate/first-debate.component";
import {SecondDebateComponent} from "./second-debate/second-debate.component";
import {ThirdDebateComponent} from "./third-debate/third-debate.component";
import {ForthDebateComponent} from "./forth-debate/forth-debate.component";
import {DebateInfoComponent} from "./debate-info/debate-info.component";
import {EndComponent} from "./end/end.component";

const frontRoutes: Routes = [
    {
      path: 'begin',
      component: FrontComponent,
      children: [
        /*子路由*/
        {path: '', component: DebateInfoComponent},
        {path: 'chooseimpr', component: ChooseImpressionComponent},
        {path: 'chooseteam', component: ChooseWinteamComponent},
        {path: 'choosedebater', component: ChooseDebaterComponent},
        {path: 'firstdebate', component: FirstDebateComponent},
        {path: 'seconddebate', component: SecondDebateComponent},
        {path: 'thirddebate', component: ThirdDebateComponent},
        {path: 'forthdebate', component: ForthDebateComponent},
        {path: 'end', component: EndComponent},
      ]
    }
  ]
;

@NgModule({
  imports: [
    RouterModule.forChild(frontRoutes)
  ],
  exports: [RouterModule]
})
export class FrontRoutingsModule {
}
