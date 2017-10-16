import {Component, OnInit} from '@angular/core';
import {DebateServiceService} from "../debate-service/debate-service.service";
import {DebateInfo, Debater} from "../debate-info/debate-info.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-first-debate',
  templateUrl: './first-debate.component.html',
  styleUrls: ['./first-debate.component.css']
})
export class FirstDebateComponent implements OnInit {

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
    this.router.navigate(['../seconddebate'], {relativeTo: this.acitverouter});
  }
}
