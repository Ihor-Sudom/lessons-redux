import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => {
  console.log(store.getState())
});

console.log(store.getState())


store.dispatch(setLanguage('ua'));
//store.dispatch(addProduct({id: 2, name: 'milk'}));
//store.dispatch(addProduct({id: 5, name: 'bear'}));
store.dispatch(setUser({name: 'Tom'}));
//store.dispatch(setUser({name: 'Bob'}));
//store.dispatch(removeProduct(2));
//store.dispatch(removeUser());
