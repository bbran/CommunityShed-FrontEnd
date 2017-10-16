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
            .catch(this.handleError)
    }

    //login page 

    logIn(userData: object): Observable<any> {
        const objectToSend = JSON.stringify(userData);

        return this.http
            .put(this.baseURL + 'sessions/mine', objectToSend, this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
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
            .catch(this.handleError)
    }

    //get group's tool list
    getGroupTools(id): Observable<any> {
        let apiURL = `${this.baseURL}groups/${id}/tools`
        return this.http
            .get(apiURL, this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
    }

    //get tool details
    getToolDetails(id): Observable<any> {
    let apiURL = `${this.baseURL}tools/${id}`
    return this.http
      .get(apiURL, this.commonHttpOptions)
      .map(this.extractData)
      .catch(this.handleError)
}


    //get to display the members of the group; group detail members component
    getGroupMembers(id): Observable<any> {
        let apiURL = `${this.baseURL}groups/${id}/users`
        return this.http
            .get(apiURL, this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
    }

    //get group details
    getGroupDetails(id): Observable<any> {
        let apiURL = `${this.baseURL}groups/${id}`

        return this.http
            .get(apiURL, this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
    }


    //request specific tool
    requestTool(requestData: object, id): Observable<any> {
        let objectToSend = JSON.stringify(requestData);
        let apiURL= `${this.baseURL}requests/tool/${id}`
        return this.http
            .post(apiURL, objectToSend, this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
    }


    //request all my tools
    getMyTools(): Observable<any> {
        return this.http
            .get(this.baseURL + 'tools/mine', this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
    }


    //approve request
    approveRequest(id): Observable<any> {
        let apiURL = `${this.baseURL}requests/${id}/approve`
        return this.http
            .put(apiURL, this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
    }

    //deny request
    denyRequest(id): Observable<any> {
        let apiURL = `${this.baseURL}requests/${id}/deny`
        return this.http
            .put(apiURL, this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
    }

    //disable tool
    disableTool(id): Observable<any> {
        let apiURL = `${this.baseURL}tools/${id}/disable`
        return this.http
            .put(apiURL, this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
    }
    
    //enable tool
    enableTool(id): Observable<any> {
        let apiURL = `${this.baseURL}tools/${id}/enable`
        return this.http
            .put(apiURL, this.commonHttpOptions)
    }

    // Invite a member to your group
    inviteNewGroupMember(userData: object, id): Observable<any> {

        const objectToSend = JSON.stringify(userData);
        const options: RequestOptionsArgs = {}
        let apiURL = `${this.baseURL}invites/group/${id}`

        return this.http
            .post(apiURL, objectToSend, this.commonHttpOptions)
            .map(this.extractData)
            .catch(this.handleError)
    }

  //success method for all service calls

  private extractData(res: Response) {
    let results = res.json();
    return results || [];
  }

  // error method for all service calls

   private handleError(error: Response | any) {
        let errMsg: string;
        if (typeof error._body === "string") {
            errMsg = error._body
        } else {
            if (error instanceof Response) {
                if (error.status === 0) {
                    errMsg = "Error connecting to API"
                } else {
                    const errorJSON = error.json();
                    errMsg = errorJSON.message;
                }
            }
        }

        return Observable.throw(errMsg);
    }


}

