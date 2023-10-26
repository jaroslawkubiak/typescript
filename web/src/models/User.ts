import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

// user interface with optional props
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = `http://localhost:3000/users`;

// user class
export class User {
  // composition style
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  // Attributes have to be initialized by a constructor
  public attributes: Attributes<UserProps>;
  constructor(attrs: UserProps) {
    // so we create new Attributes here
    this.attributes = new Attributes<UserProps>(attrs);
  }

  // goal is to return reference to on method in events, not call this method on
  get on() {
    // NOT call a method on here, return only reference
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}
