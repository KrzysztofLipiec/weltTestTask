import {Injectable} from "@angular/core";
import {Http, URLSearchParams, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ServerConfig} from "../configs/ServerConfig";
import {IPost} from "../interfaces/post/IPost";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class PostsService {
  constructor(private http: Http) {

  }

  public fetchPosts(userId: number): Observable<Array<IPost>> {
    if (!userId) {
      return Observable.throw('UserId is not defined (PostsService)');
    }
    let params: URLSearchParams = new URLSearchParams();
    params.set('userId', userId.toString());
    return this.http.get(ServerConfig.apiUrl + '/posts', {
      search: params
    }).map((res: Response) => {
      return res.json() || [];
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
