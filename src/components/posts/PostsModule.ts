import {PostsComponent} from "./PostsComponent";
import {NgModule} from "@angular/core";
import {UsersService} from "../../services/UsersService";
import {HttpModule} from "@angular/http";
import {PostsService} from "../../services/PostsService";
@NgModule({
  exports: [PostsComponent],
  imports: [HttpModule],
  declarations: [PostsComponent],
  providers: [UsersService, PostsService]
})
export class PostsModule {

}
