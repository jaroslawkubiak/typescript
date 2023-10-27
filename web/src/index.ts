import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log('event change');
  console.log(collection);
});

collection.fetch();
