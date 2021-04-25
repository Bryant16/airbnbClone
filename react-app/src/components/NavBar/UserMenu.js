import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { popLogin, popSignup } from '../../store/modal';
import { LogOut } from '../../store/session';

export default function UserMenu ({ showMenu, buttonRef }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const mooring = useSelector(state => state.modal.mooring);

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const showLogin = () => dispatch(popLogin());

  const showSignup = () => dispatch(popSignup());

  const logout = () => dispatch(LogOut());

  useEffect(() => {
    const setMenuPosition = () => {
      const { x, y } = buttonRef.current.getBoundingClientRect();
      setLeft(x - 15);
      setTop(y + 55);
    };
    setMenuPosition();
    window.onresize = setMenuPosition;
  }, [buttonRef]);

  return mooring && ReactDOM.createPortal(showMenu
    ? (
      <div
        className='navbar_links'
        style={{ left, top }}
      >
        <Link to='/'>
          <button className='button-usermenu'>
            Home
          </button>
        </Link>
        {!user
          ? (
            <>
              <button
                onClick={showLogin}
                className='button-usermenu'
              >
                Login
              </button>
              <button
                onClick={showSignup}
                className='button-usermenu'
              >
                Sign Up
              </button>
            </>
            )
          : (
            <>
              <Link to='/users/me'>
                <button className='button-usermenu'>
                  My Profile
                </button>
              </Link>
              <button
                onClick={logout}
                className='button-usermenu'
              >
                Log Out
              </button>
            </>
            )}
      </div>
      )
    : null,
  mooring);
}
