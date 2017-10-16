/**
 * 作者:林
 * 时间:2017/10/13
 * 功能:配置路由模块
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {ChooseImpressionComponent} from "./front/choose-impression/choose-impression.component";
import {FrontComponent} from "./front/front.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})/*enableTracing ：在console.log中打印出路由内部事件信息*/
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
