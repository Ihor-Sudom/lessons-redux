
export const addUser = (user) => {
  return {
    type: 'USER/ADD',
    user,
  };
};

export const deleteUser = (id) => {
  return {
    type: 'USER/DELETE',
    id,
  };
};