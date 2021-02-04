
export const increment = (userObject) => {
  return {
    type: 'INCREMENT',
    userObject,
  };
};

export const decrement = (id) => {
  return {
    type: 'DECREMENT',
    id,
  };
};