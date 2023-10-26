import { User } from './models/User';

const user = new User({ name: 'Jarosław', age: 40 });

console.log(user.get('name'));

user.on('klik', () => {
  console.log('klik');
});

user.trigger('klik');
