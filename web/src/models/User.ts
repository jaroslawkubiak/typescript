import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Model } from './Model';

// user interface with optional props
export interface UserProps {
  id?: number;
  age?: number;
  name?: string;
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

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json));
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
