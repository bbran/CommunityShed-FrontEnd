import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  //all api calls start with this base. concat additional text for endpoint.

  private baseURL: string = "https://communityshed.herokuapp.com/api/";
  status;

  private commonHttpOptions: RequestOptionsArgs;

  //this is necessary for the user authentication to work 'withCredentials'
  constructor(private http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.commonHttpOptions = { headers, withCredentials: true };
  }

  //Sign up page to create a new user

  createNewUser(userData: object): Observable<any> {
    const objectToSend = JSON.stringify(userData);

    const options: RequestOptionsArgs = {}

    return this.http
      .post(this.baseURL + 'users', objectToSend, this.commonHttpOptions)
      .map(this.extractData)
      .catch (this.handleError)
  }

  //login page 

  logIn(userData: object): Observable<any> {
    const objectToSend = JSON.stringify(userData);

    return this.http
      .put(this.baseURL + 'sessions/mine', objectToSend, this.commonHttpOptions)
      .map(this.extractData)
      .catch (this.handleError)
  }

    //get all community tools
    getCommunityTools(): Observable<any> {
        return this.http
        .get(this.baseURL + 'tools', this.commonHttpOptions)
        .map(this.extractData)
        .catch(this.handleError)
    }

    //get to display the groups to which you are a member; myGroups page
    getMyGroups(): Observable<any> {
        return this.http
        .get(this.baseURL + 'groups', this.commonHttpOptions)
        .map(this.extractData)
        .catch(this.handleError)
    }

  //Sign up page to create a new group

  createNewGroup(userData: object): Observable<any> {
    const objectToSend = JSON.stringify(userData);

    const options: RequestOptionsArgs = {}

    return this.http
      .post(this.baseURL + 'groups', objectToSend, this.commonHttpOptions)
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

