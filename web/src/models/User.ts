import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
// import { AxiosResponse } from 'axios';
import { Model } from './Model';

// user interface with optional props
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = `http://localhost:3000/users`;

// user class
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    //prettier-ignore
    return new User(
      new Attributes<UserProps>(attrs), 
      new Eventing(), 
      new ApiSync<UserProps>(rootUrl));
  }
  // // composition style
  // public events: Eventing = new Eventing();
  // public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  // // Attributes have to be initialized by a constructor
  // public attributes: Attributes<UserProps>;
  // constructor(attrs: UserProps) {
  //   // so we create new Attributes here
  //   this.attributes = new Attributes<UserProps>(attrs);
  // }
}
