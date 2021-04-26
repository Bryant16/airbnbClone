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
    showMenu && setMenuPosition();
    window.onresize = setMenuPosition;
  }, [showMenu, buttonRef]);

  return mooring && ReactDOM.createPortal(showMenu
    ? (
      <div
        className='navbar_links'
        style={{ left, top }}
      >
        <Link className='button-usermenu outer first' to='/'>
          <button className='button-usermenu inner first'>
            Home
          </button>
        </Link>
        {!user
          ? (
            <>
              <div className='button-usermenu outer'>
                <button
                  onClick={showLogin}
                  className='button-usermenu inner'
                >
                  Login
                </button>
              </div>
              <div className='button-usermenu outer'>
                <button
                  onClick={showSignup}
                  className='button-usermenu inner'
                >
                  Sign Up
                </button>
              </div>
            </>
            )
          : (
            <>
              <Link className='button-usermenu outer' to='/users/me'>
                <button className='button-usermenu inner'>
                  My Profile
                </button>
              </Link>
              <div className='button-usermenu outer'>
                <button
                  onClick={logout}
                  className='button-usermenu inner'
                >
                  Log Out
                </button>
              </div>
            </>
            )}
      </div>
      )
    : null,
  mooring);
}
