import {Injectable} from '@angular/core';
import {Response, Headers, RequestOptions, Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {DebateInfo} from "../debate-info/debate-info.component";

@Injectable()
export class DebateServiceService {

  public postDetailURL = "mock-data/debateInfo.json";

  constructor(private http: Http) {
  }

  public getDebaterInfo(): Observable<DebateInfo> {
    return this.http
      .get(this.postDetailURL)
      .map((res: Response) => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.log("出错了", error);
    return Promise.reject(error.message || error);
  }

}
