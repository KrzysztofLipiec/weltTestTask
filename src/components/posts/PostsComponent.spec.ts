import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {PostsComponent} from "./PostsComponent";
import {PostsService} from "../../services/PostsService";
import {UsersService} from "../../services/UsersService";
import {CommonModule, APP_BASE_HREF} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Params, ActivatedRoute} from "@angular/router";
import {AppRoutingModule} from "../../app/AppRoutingModule";
import {Subject} from "rxjs/Subject";

describe('PostsComponent', function () {
  let comp: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let params: Subject<Params>;

  beforeEach(async(() => {
    params = new Subject<Params>();
    TestBed.configureTestingModule({
      imports: [HttpModule, FormsModule, CommonModule, AppRoutingModule, RouterModule ],
      declarations: [PostsComponent],
      providers: [UsersService, PostsService,
        {provide: APP_BASE_HREF, useValue: '/'},
        { provide: ActivatedRoute, useValue: { params: params }}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );
});
