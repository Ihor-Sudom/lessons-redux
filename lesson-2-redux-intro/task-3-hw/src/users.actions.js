
export const addUser = (userObject) => {
  return {
    type: 'ADD',
    userObject,
  };
};

export const deleteUser = (id) => {
  return {
    type: 'DELETE',
    id,
  };
};