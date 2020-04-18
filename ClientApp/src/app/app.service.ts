//get user
//post request group

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./models/user";
import { RequestGroup } from "./models/request-group";

//patch request group
@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>("/api");
  }

  postRequestGroup(requestGroup: RequestGroup) {
    return this.http.post<RequestGroup>(
      "/api",
      requestGroup
    );
  }

  patchRequestGroup(requestGroup: RequestGroup) {
    return this.http.patch<RequestGroup>(
      "/api",
      requestGroup
    );
  }
}
