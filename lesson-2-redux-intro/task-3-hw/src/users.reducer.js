import { ADD, DELETE } from './users.actions';

const initialState = {
  userList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        userList: action.payload
      };
    case DELETE:
      return {
        ...state,
        userList: state.userList.filter(el => el.id != action.payload)
      };
    default:
      return state;
  };
};

export default reducer;
