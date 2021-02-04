
const initialState = {
  userList: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER/ADD':
      return {
        ...state,
        userList: state.userList.concat(action.user)
      };
    case 'USER/DELETE':
      return {
        ...state,
        userList: state.userList.filter(el => el.id != action.id)
      };
    default:
      return state;
  };
};
