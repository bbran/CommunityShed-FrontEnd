import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  //all api calls start with this base. concat additional text for endpoint.

  private baseURL: string = "https://communityshed.herokuapp.com/api/";
  status;

  constructor(private http: Http) { }

  //Sign up page to create a new user

  createNewUser(userData: object): Observable<any> {
    const objectToSend = JSON.stringify(userData);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseURL + 'users', objectToSend, { headers: headers })
      .map(this.extractData)
      .catch (this.handleError)
  }

  //login page 

  logIn(userData: object): Observable<any> {
    const objectToSend = JSON.stringify(userData);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(this.baseURL + 'sessions/mine', objectToSend, { headers: headers })
      .map(this.extractData)
      .catch (this.handleError)
  }

  //success method for all service calls

  private extractData(res: Response) {
    let results = res.json();
    return results || [];
  }

  // error method for all service calls

  private handleError(error: Response | any) {
    let errMsg: string;
    if(typeof error._body === "string"){
        errMsg = error._body
    }else{
        if (error instanceof Response) {
            if(error.status === 0){
                errMsg = "Error connecting to API"
            }else{
                const errorJSON = error.json();
                errMsg = errorJSON.message;
            }
        }
    }

    return Observable.throw(errMsg);
}


}

