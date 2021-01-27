import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User () {
  console.log('user triggered');
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await window.fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      {user
        ? (
          <li>
            <strong>Email</strong> {user.email}
          </li>
          )
        : null}
    </ul>
  );
}
export default User;
