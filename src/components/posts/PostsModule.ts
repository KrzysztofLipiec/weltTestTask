import {PostsComponent} from "./PostsComponent";
import {NgModule} from "@angular/core";
import {UsersService} from "../../services/UsersService";
import {HttpModule} from "@angular/http";
@NgModule({
  exports: [PostsComponent],
  imports: [HttpModule],
  declarations: [PostsComponent],
  providers: [UsersService]
})
export class PostsModule {

}
