import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function UsersList () {
  const loggedInUser = useSelector(state => state.session.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const response = await window.fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = loggedInUser
    ? users.map((user) => {
        return (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
          </li>
        );
      })
    : null;

  return (
    <>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}

export default UsersList;
