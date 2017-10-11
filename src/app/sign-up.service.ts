import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'

import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignUpService {

  private url: string = "https://communityshed.herokuapp.com/api/users";

  constructor(private http: Http) { }

  createNewUser(userData): Observable<any> {
    var result;
    var objectToSend = JSON.stringify(userData);
  
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
  
    this.http.post(this.url, objectToSend, { headers: headers })
       .map((res: Response) => res.json()).subscribe(res => {
         this.result = res;
         return this.result;
       });
  }
}
