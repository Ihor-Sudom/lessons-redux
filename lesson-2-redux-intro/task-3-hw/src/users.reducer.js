
const initialState = {
  userList: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        userList: state.userList.concat(action.userObject)
      };
    case 'DECREMENT':
      return {
        userList: state.userList.filter(el => el.id != action.id)
      };
    default:
      return state;
  };
};
