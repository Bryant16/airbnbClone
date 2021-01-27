import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoutButton from './auth/LogoutButton';
import SearchBar from './SearchBar'
import logo from '../collegeLogo.png'
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src={logo}></img>
      </div>
      <div className='navbar_search'>
        <SearchBar />
      </div>
      <div className='navbar_links'>
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
      </div>
    </nav>
  );
};

export default NavBar;
