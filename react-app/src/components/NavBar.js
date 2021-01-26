import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            <button>
              Home
            </button>
          </NavLink>
        </li>
        <li>
          {user
            ? <LogoutButton />
            : (
              <NavLink to='/login' exact activeClassName='active'>
                <button>
                  Login
                </button>
              </NavLink>
              )}
        </li>
        <li>
          <NavLink to='/sign-up' exact activeClassName='active'>
            <button>
              Sign Up
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact activeClassName='active'>
            <button>
              Users
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
