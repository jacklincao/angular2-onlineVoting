import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

@Component({
  selector: 'app-websocket-service',
  templateUrl: './websocket-service.component.html',
  styleUrls: ['./websocket-service.component.css']
})
export class WebsocketServiceComponent implements OnInit {

  ws: WebSocket;

  constructor() {
  }

  ngOnInit() {
  }

  createObservableSocket(url: string, link: number): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
        this.ws.onopen = (event) => this.sendMessage({link: link});
        return () => this.ws.close();
      }
    ).map(message => JSON.parse(message));
  }

  sendMessage(message: any) {
    this.ws.send(JSON.stringify(message));
  }
}
