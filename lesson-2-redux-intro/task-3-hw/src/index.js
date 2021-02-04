import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.dispatch(addUser({id: 10, name: 'Tom'}));
store.dispatch(addUser({id: 15, name: 'John'}));
store.dispatch(addUser({id: 20, name: 'Ihor'}));

//store.dispatch(deleteUser(15));


  console.log(store.getState());
