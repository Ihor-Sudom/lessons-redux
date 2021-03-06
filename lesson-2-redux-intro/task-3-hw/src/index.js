import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(addUser({id: 10, name: 'Tom'}));
store.dispatch(addUser({id: 15, name: 'John'}));
store.dispatch(addUser({id: 20, name: 'Ihor'}));
store.dispatch(addUser({id: 22, name: 'Alex'}));

store.dispatch(deleteUser(15));
store.dispatch(deleteUser(20));

