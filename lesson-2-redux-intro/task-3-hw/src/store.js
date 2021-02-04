import usersReducer from './users.reducer';
import { createStore } from 'redux';

const store = createStore(usersReducer);

export default store;