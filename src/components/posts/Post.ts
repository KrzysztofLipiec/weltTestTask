import {IPost} from "../../interfaces/post/IPost";
import {IUser} from "../../interfaces/user/IUser";
export class Post {
  constructor(private user:IUser, private post:IPost) {
    /*this class shouldn't merge user and post but
    I am not sure how should I merge data from responses because user should be holded in some provider and be
    available for rest of application. I just want to fit requirements (hopefully its enough)*/
  }
}
