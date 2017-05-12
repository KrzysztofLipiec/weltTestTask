import {Component} from "@angular/core";
import {UsersService} from "../../services/UsersService";
import {IUser} from "../../interfaces/user/IUser";
@Component({
  selector: 'posts',
  moduleId: module.id,
  templateUrl: './posts.tmpl.html'
})
export class PostsComponent {
  constructor(private usersService: UsersService) {
    this.usersService.fetchUser(1).subscribe(
      (response: IUser) => {
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
