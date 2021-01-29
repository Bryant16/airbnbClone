import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import SearchBar from './SearchBar';
import logo from '../collegeLogo.png';
import { FaUserAlt } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import './NavBar.css';

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <div className='div__transparent_bg'>
      <nav className='navbar'>
        <div className='navbar_logo'>
          <NavLink to='/' exact activeClassName='active'>
            <img src={logo} alt='' />
          </NavLink>
        </div>
        <div className='navbar_search'>
          <SearchBar user={user} />
        </div>
        <div className='div__user_button'>
          <div>
            <FaUserAlt />
          </div>
          <div>
            <BsGrid3X3GapFill />
          </div>
          <div className='navbar_links'>
            <div>
              <NavLink to='/' exact activeClassName='active'>
                <button>Home</button>
              </NavLink>
            </div>
            <div>
              {user
                ? <LogoutButton />
                : (
                  <NavLink to='/login' exact activeClassName='active'>
                    <button>Login</button>
                  </NavLink>
                  )}
            </div>
            {!user
              ? (
                <div>
                  <NavLink to='/sign-up' exact activeClassName='active'>
                    <button>Sign Up</button>
                  </NavLink>
                </div>
                )
              : null}
            {user
              ? (
                <>
                  <div>
                    <NavLink to='/users' exact activeClassName='active'>
                      <button>Users</button>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to='/users/me'>
                      <button>My Profile</button>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to='/users/me/reservations'>
                      <button>My Reservations</button>
                    </NavLink>
                  </div>
                </>
                )
              : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
