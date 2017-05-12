import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./AppComponent";
import {PostsModule} from "../components/posts/PostsModule";


@NgModule({
  imports:      [ BrowserModule, PostsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
