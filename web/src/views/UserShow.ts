import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div>
            <h1>User Detail</h1>
            <div>User Name: <b>${this.model.get('name')}</b></div>
            <div>User Age: <b>${this.model.get('age')}</b></div>
        </div>`;
  }
}
