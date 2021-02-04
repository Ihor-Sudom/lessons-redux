import store from './store.js';
import { increment, decrement } from './users.actions.js';

store.dispatch(increment({id: 10, name: 'Tom'}));
store.dispatch(increment({id: 15, name: 'John'}));
store.dispatch(increment({id: 20, name: 'Ihor'}));

store.dispatch(decrement(15));


  console.log(store.getState());
