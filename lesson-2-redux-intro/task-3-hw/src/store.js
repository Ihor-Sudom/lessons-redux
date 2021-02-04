import { usersReducer } from './users.reducer.js';
import { createStore } from 'redux';

const store = createStore(usersReducer);

export default store;