import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./AppComponent";
import {PostsModule} from "../components/posts/PostsModule";
import {AppRoutingModule} from "./AppRoutingModule";


@NgModule({
  imports:      [ BrowserModule, PostsModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
