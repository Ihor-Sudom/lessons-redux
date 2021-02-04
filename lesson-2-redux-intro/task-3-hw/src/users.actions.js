export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const addUser = (user) => {
  return {
    type: ADD,
    user,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE,
    id,
  };
};