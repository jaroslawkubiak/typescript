// import { UserEdit } from './views/UserEdit';
// import { User } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const rootUrl = `http://localhost:3000/users`;

const users = new Collection(rootUrl, (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const divRoot = document.getElementById('root');
  if (divRoot) {
    new UserList(divRoot, users).render();
  }
});

users.fetch();

// const user = User.buildUser({ name: 'Jarek', age: 30 });
//

// const userEdit = new UserEdit(divRoot!, user);
// userEdit.render();
// console.log(userEdit);
