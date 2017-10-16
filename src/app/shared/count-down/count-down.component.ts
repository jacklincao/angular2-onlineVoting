import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  @Input()
  public time = 30;

  // 定时器
  private timer;

  constructor() {
  }

  /**
   * 暂停
   */
  public pause(): void {
    clearInterval(this.timer);
  }

  /**
   * 开始
   */
  public begin(): void {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      }
      else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  /**
   * 重置
   * @param second
   */
  public reset(second): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.time = second;
  }

  ngOnInit() {
  }
}
