import {Component} from "@angular/core";
import {UsersService} from "../../services/UsersService";
@Component({
  selector: 'posts',
  moduleId: module.id,
  templateUrl: './posts.tmpl.html'
})
export class PostsComponent {
  constructor(private usersService: UsersService) {
    this.usersService.fetchUser(1).subscribe(
      (response: any) => {//ToDo use user interface after implementation
        console.log(response);
      },
      () => {

      }
    );
  }
}
