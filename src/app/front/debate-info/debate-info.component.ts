import {Component, OnInit} from '@angular/core';
import {DebateServiceService} from "../debate-service/debate-service.service";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-debate-info',
  templateUrl: './debate-info.component.html',
  styleUrls: ['./debate-info.component.css']
})
export class DebateInfoComponent implements OnInit {


  public debateInfo: DebateInfo = new DebateInfo("", "", "", null, null);

  constructor(private debateServiceService: DebateServiceService, private router: Router, private acitverouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.getDebateInfo();
  }

  public next(): void {
    this.router.navigate(['chooseimpr'], {relativeTo: this.acitverouter});
  }

  public getDebateInfo(): void {
    this.debateServiceService.getDebaterInfo()
      .subscribe(
        data => this.debateInfo = data
      );
  }

}

export class Debater {
  constructor(public name: string, public number: string) {
  }
}

export class DebateInfo {
  constructor(public positivePoint: string,
              public negativePoint: string,
              public host: string,
              public positiveteam: Debater[],
              public negativeteam: Debater[]) {
  }
}
