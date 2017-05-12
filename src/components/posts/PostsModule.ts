import {PostsComponent} from "./PostsComponent";
import {NgModule} from "@angular/core";
import {UsersService} from "../../services/UsersService";
import {HttpModule} from "@angular/http";
import {PostsService} from "../../services/PostsService";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../../app/AppRoutingModule";
@NgModule({
  exports: [PostsComponent],
  imports: [HttpModule, CommonModule, AppRoutingModule],
  declarations: [PostsComponent],
  providers: [UsersService, PostsService]
})
export class PostsModule {

}
