import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostsComponent} from "../components/posts/PostsComponent";
const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
