import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routings.module';
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {LoginModule} from "./login/login.module";
import {FrontModule} from "./front/front.module";
import { ChooseWinteamComponent } from './front/choose-winteam/choose-winteam.component';
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    PageNotFoundModule,
    LoginModule,
    FrontModule,
    AppRoutingModule/*导入路由模块,顺序很重要*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
