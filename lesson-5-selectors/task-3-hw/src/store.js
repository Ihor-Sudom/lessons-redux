import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reduser';

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;