import { ADD, DELETE } from './users.actions';

const initialState = {
  userList: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        userList: state.userList.concat(action.user)
      };
    case DELETE:
      const user = state.userList.filter(el => el.id != action.id);
      return {
        ...state,
        userList: user
      };
    default:
      return state;
  };
};

export default usersReducer;
