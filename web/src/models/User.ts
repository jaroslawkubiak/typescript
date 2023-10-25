import axios, { AxiosResponse } from 'axios';

// user interface with optional props
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
// type alias
type Callback = () => void;

const BASE_URL = `http://localhost:3000`;

// user class
export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  // getter for user props, jsut specyfi the name of props
  get(propName: string): number | string {
    return this.data[propName];
  }

  // setter for all user props
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  // event
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  // triggers to events
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => {
      callback();
    });
  }

  // fetch user by id
  fetch(): void {
    axios.get(`${BASE_URL}/users/${this.get('id')}`).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  // save data in DB
  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`${BASE_URL}/users/${id}`, this.data);
    } else {
      axios.post(`${BASE_URL}/users`, this.data);
    }
  }
}
