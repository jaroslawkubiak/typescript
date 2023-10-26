// import { UserProps } from './User';

export class Attributes<TypeOfUserProps extends object> {
  constructor(private data: TypeOfUserProps) {}

  // getter for user props, jsut specyfi the name of props
  get = <KeyOfTypeOfUserProps extends keyof TypeOfUserProps>(
    key: KeyOfTypeOfUserProps
  ): TypeOfUserProps[KeyOfTypeOfUserProps] => {
    return this.data[key];
  };

  // setter for all user props
  set(update: TypeOfUserProps): void {
    Object.assign(this.data, update);
  }
}

// const attrs = new Attributes<UserProps>({
//   id: 5,
//   age: 23,
//   name: 'Jarek',
// });

// const name = attrs.get('name');
// const age = attrs.get('age');
