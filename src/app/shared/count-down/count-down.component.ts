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

  // 是否暂停
  private isPause = false;

  constructor() {
  }

  /**
   * 暂停
   */
  public pause(): void {
    clearInterval(this.timer);
    this.isPause = true;
  }

  /**
   * 开始
   */
  public begin(): void {
    if (!this.timer || this.isPause) {
      this.timer = setInterval(() => {
        if (this.time > 0) {
          this.time--;
        }
        else {
          clearInterval(this.timer);
        }
        if (this.isPause) {
          this.isPause = false;
        }
      }, 1000);
    }
    else {
      console.log("已经开始了");
    }
  }

  /**
   * 重置
   * @param second
   */
  public reset(second): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.time = second;
    this.isPause = false;
  }

  ngOnInit() {
  }
}
