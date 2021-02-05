import { ADD, DELETE } from './users.actions';

const initialState = {
  userList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const newUser = state.userList.concat(action.payload)
      return {
        ...state,
        userList: newUser
      };
    case DELETE:
      const newUserList = state.userList.filter(el => el.id != action.payload);
      return {
        ...state,
        userList: newUserList
      };
    default:
      return state;
  };
};

export default reducer;
