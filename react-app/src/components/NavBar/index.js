import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';

import SearchBar from '../SearchBar';
import UserMenu from './UserMenu';
import { useEventListener } from '../../utils/hooks';

import logo from '../../collegeLogo.png';
import './NavBar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  const [showMenu, setShowMenu] = useState(false);

  const buttonRef = useRef(null);

  const [addEventListener, removeEventListener] = useEventListener(document);

  const show = () => setShowMenu(true);

  const hide = () => setShowMenu(false);

  useEffect(() => {
    if (showMenu) addEventListener('click', hide);
    return () => removeEventListener('click', hide);
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
          <div className='menu-icon'>
            <FaUserAlt />
          </div>
          <div className='menu-icon'>
            <BsGrid3X3GapFill />
          </div>
          <UserMenu
            showMenu={showMenu}
            buttonRef={buttonRef}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
