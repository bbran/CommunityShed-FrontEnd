import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignUpService {

  private endpoint: string = "https://communityshed.herokuapp.com/api/users";
  status;

  constructor(private http: Http) { }

  createNewUser(userData: object): Observable<any> {
    const objectToSend = JSON.stringify(userData);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.endpoint, objectToSend, { headers: headers })
      .map(result => result.json())

  }

  // createNewUser(userData): Observable<any> {
  //   var result;
  //   var objectToSend = JSON.stringify(userData);

  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   this.http.post(this.url, objectToSend, { headers: headers })
  //      .map((res: Response) => res.json())
  //      .subscribe(res => {
  //        this.result = res;
  //        return this.result;
  //      });
  // }

}
