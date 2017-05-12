import {Component} from "@angular/core";
import {UsersService} from "../../services/UsersService";
import {IUser} from "../../interfaces/user/IUser";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
import {IPost} from "../../interfaces/post/IPost";
import {PostsService} from "../../services/PostsService";
@Component({
  selector: 'posts',
  moduleId: module.id,
  templateUrl: './posts.tmpl.html'
})
export class PostsComponent {
  constructor(private usersService: UsersService, private postsService: PostsService) {
    let usersObservable: Observable<IUser> = this.usersService.fetchUser(1),
      postsObservable: Observable<Array<IPost>> = this.postsService.fetchPosts(1);

    Observable.forkJoin([
      usersObservable,
      postsObservable
    ]).subscribe(
      (responses: Array<IUser|Array<IPost>>) => {
        console.log(responses);
      },
      (error: any) => {
        console.error(error);
      }
    );

  }
}
