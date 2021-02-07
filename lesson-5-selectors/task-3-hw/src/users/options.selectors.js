import { createSelector } from 'reselect';

export const usersListSelector = state => {
  return state.users.usersList;
};

export const filterTextSelector = state => {
  return state.users.filterText;
};

export const filterUsersListSelector = createSelector(
  [filterTextSelector, usersListSelector ],
  (filterText, usersList) => {
    return filterText === ''
      ? usersList
      : usersList.filter(user => user.name.toLowerCase().includes(filterText))
  }
);
