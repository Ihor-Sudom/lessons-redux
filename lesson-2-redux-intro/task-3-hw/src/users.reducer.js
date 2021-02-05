import { ADD, DELETE } from './users.actions';

const initialState = {
  usersList: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.userList.concat(action.user)
      };
    case DELETE:
      return {
        ...state,
        usersList: state.userList.filter(el => el.id != action.id)
      };
    default:
      return state;
  };
};

export default usersReducer;
