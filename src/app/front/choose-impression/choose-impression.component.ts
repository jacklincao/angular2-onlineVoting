import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DebateInfo} from "../debate-info/debate-info.component";
import {DebateServiceService} from "../debate-service/debate-service.service";

@Component({
  selector: 'app-choose-impression',
  templateUrl: './choose-impression.component.html',
  styleUrls: ['./choose-impression.component.css']
})
export class ChooseImpressionComponent implements OnInit {

  private time = 30;

  public debateInfo: DebateInfo = new DebateInfo("", "", "", null, null);

  constructor(private debateServiceService: DebateServiceService, private router: Router, private activedRouter: ActivatedRoute) {
  }

  public next(): void {
    this.router.navigate(['../firstdebate'], {relativeTo: this.activedRouter});
  }

  ngOnInit() {
    this.getDebateInfo();
  }

  public getDebateInfo(): void {
    this.debateServiceService.getDebaterInfo()
      .subscribe(
        data => this.debateInfo = data
      );
  }

}
