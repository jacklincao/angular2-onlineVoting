import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DebateInfo} from "../debate-info/debate-info.component";
import {DebateServiceService} from "../debate-service/debate-service.service";
import {WebsocketServiceService} from "../../shared/websocket-service/websocket-service.service";

@Component({
  selector: 'app-choose-impression',
  templateUrl: './choose-impression.component.html',
  styleUrls: ['./choose-impression.component.css']
})
export class ChooseImpressionComponent implements OnInit {

  private time = 30;

  public debateInfo: DebateInfo = new DebateInfo("", "", "", null, null);

  constructor(private debateServiceService: DebateServiceService, private websocketservice: WebsocketServiceService, private router: Router, private activedRouter: ActivatedRoute) {
  }

  public next(): void {
    this.router.navigate(['../firstdebate'], {relativeTo: this.activedRouter});
  }

  ngOnInit() {
    this.getDebateInfo();
    this.createConnection();
  }

  public createConnection(): void {
    this.websocketservice.createObservableSocket("ws://localhost:8080/onlineVoting/websocket?tel=17725197693&&password=123456", 1)
      .subscribe(
        data => console.log(data)
      );
  }

  public begin(): void {
    console.log("234");
  }

  public sendMessage(): void {
    if (this.websocketservice.ws != null) {
      this.websocketservice.sendMessage({test:2});
    }
    else {
      this.createConnection();
    }
  }

  public getDebateInfo(): void {
    this.debateServiceService.getDebaterInfo()
      .subscribe(
        data => this.debateInfo = data
      );
  }

}
