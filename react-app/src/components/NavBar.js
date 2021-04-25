import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';

import LogoutButton from './auth/LogoutButton';
import SearchBar from './SearchBar';
import logo from '../collegeLogo.png';

import './NavBar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const show = () => setShowMenu(true);

  const hide = () => setShowMenu(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    if (showMenu) document.addEventListener('click', hide);
    return () => document.removeEventListener('click', hide);
  }, [showMenu]);

  return (
    <div className='div__transparent_bg'>
      <nav className='navbar'>
        <div className='navbar_logo'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className='navbar_search'>
          <SearchBar user={user} />
        </div>
        <div
          className='div__user_button'
          onClick={show}
          ref={buttonRef}
        >
          <div>
            <FaUserAlt />
          </div>
          <div>
            <BsGrid3X3GapFill />
          </div>
          {showMenu
            ? (
              <div
                className='navbar_links'
                style={{
                  left: `calc(${buttonRef.current.getBoundingClientRect().x})`
                }}
              >
                <Link to='/'>
                  <button>Home</button>
                </Link>
                {!user
                  ? (
                    <>
                      <div>
                        <Link to='/sign-up'>
                          <button>Sign Up</button>
                        </Link>
                      </div>
                      <div>
                        <Link to='/login'>
                          <button>Login</button>
                        </Link>
                      </div>
                    </>
                    )
                  : (
                    <>
                      <div>
                        <Link to='/users'>
                          <button>Users</button>
                        </Link>
                      </div>
                      <div>
                        <Link to='/users/me'>
                          <button>My Profile</button>
                        </Link>
                      </div>
                      <div>
                        <LogoutButton />
                      </div>
                    </>
                    )}
              </div>
              )
            : null}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
