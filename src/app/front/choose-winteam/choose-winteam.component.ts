import { Component, OnInit } from '@angular/core';
import {DebateInfo} from "../debate-info/debate-info.component";
import {DebateServiceService} from "../debate-service/debate-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-choose-winteam',
  templateUrl: './choose-winteam.component.html',
  styleUrls: ['./choose-winteam.component.css']
})
export class ChooseWinteamComponent implements OnInit {

  public time = 30;

  public debateInfo: DebateInfo = new DebateInfo("", "", "", null, null);

  constructor(private debateService: DebateServiceService, private router: Router, private acitverouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.getDebateInfo();
  }

  public getDebateInfo(): void {
    this.debateService.getDebaterInfo()
      .subscribe(
        data => this.debateInfo = data
      );
  }

  public next(): void {
    this.router.navigate(['../choosedebater'], {relativeTo: this.acitverouter});
  }

}
