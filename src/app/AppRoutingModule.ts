import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostsComponent} from "../components/posts/PostsComponent";
const routes: Routes = [
  {path: '', redirectTo: 'posts/1', pathMatch: 'full'},
  {path: 'posts/:userId', component: PostsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
