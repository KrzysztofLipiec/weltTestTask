import {Component} from "@angular/core";
import {UsersService} from "../../services/UsersService";
import {IUser} from "../../interfaces/user/IUser";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
import {IPost} from "../../interfaces/post/IPost";
import {PostsService} from "../../services/PostsService";
import {Post} from "./Post";
@Component({
  selector: 'posts',
  moduleId: module.id,
  templateUrl: './posts.tmpl.html'
})
export class PostsComponent {

  private data: Array<Post> = [];

  constructor(private usersService: UsersService, private postsService: PostsService) {
    let usersObservable: Observable<IUser> = this.usersService.fetchUser(1),
      postsObservable: Observable<Array<IPost>> = this.postsService.fetchPosts(1);

    Observable.forkJoin([
      usersObservable,
      postsObservable
    ]).subscribe(
      (responses: Array<IUser|Array<IPost>>) => {
        let userData: IUser = responses[0] as IUser,
          posts: Array<IPost> = responses[1] as Array<IPost>;
        posts.forEach((post:IPost) => {
          this.data.push(new Post(userData, post));
        })
      },
      (error: any) => {
        console.error(error);
      }
    );

  }
}
