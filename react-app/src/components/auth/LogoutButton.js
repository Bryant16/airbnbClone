import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LogOut } from '../../store/session';

export default function LogoutButton () {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);

  const onLogout = () => dispatch(LogOut());

  return user
    ? (
      <button onClick={onLogout}>
        Logout
      </button>
      )
    : null;
}
