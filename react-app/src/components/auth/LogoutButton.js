import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LogOut } from "../../store/session";

const LogoutButton = () => {
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const onLogout = (e) => {
    dispatch(LogOut());
  };

  return user ? <button onClick={onLogout}>Logout</button> : null;
};

export default LogoutButton;
