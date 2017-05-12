import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ServerConfig} from "../configs/ServerConfig";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IUser} from "../interfaces/user/IUser";
@Injectable()
export class UsersService {
  constructor(private http: Http) {
  }

  public fetchUser(userId: number): Observable<IUser> {
    return this.http.get(ServerConfig.apiUrl + '/users/' + userId).map((res: Response) => {
      return res.json() || {};
    }).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
