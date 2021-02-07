import React from "react";
import User from "./User.jsx";
import Filter from "../Filter";
import { connect } from "react-redux";
import * as userActions from "./users.actions";
import { filterUsersListSelector, filterTextSelector } from './options.selectors';

const UsersList = ({ users, handleChange }) => {
  const { filterText, usersList } = users;

  return (
    <div>
      <Filter
        filterText={filterText}
        count={usersList.length}
        onChange={(e) => handleChange(e.target.value)}
      />
      <ul className="users">
        {usersList.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: {
      filterText: filterTextSelector(state),
      usersList: filterUsersListSelector(state),
    },
  };
};

const mapDispatch = {
  handleChange: userActions.addText,
};

export default connect(mapState, mapDispatch)(UsersList);
