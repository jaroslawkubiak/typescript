import { User, UserProps } from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }
  // save to DB
  onSaveClick = (): void => {
    this.model.save();
  };

  // set name
  onSetNameClick = (): void => {
    const inputName = this.parent.querySelector('input');
    if (inputName) {
      const name = inputName.value;
      this.model.set({ name });
    }
  };

  // set age
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
        <div style="padding: 10px;">
            <input type="text" placeholder="${this.model.get('name')}" style="margin: 10px"/>
            <button class="set-name" style="margin: 10px">Change name</button>
            <button class="set-age" style="margin: 10px">Set random age</button><br />
            <button class="save-model" style="margin: 10px">Save User</button>
        </div>
    `;
  }
}
