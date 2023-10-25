import { User } from './models/User';

const user = new User({ name: 'jarek 5', age: 40 });

user.save();
