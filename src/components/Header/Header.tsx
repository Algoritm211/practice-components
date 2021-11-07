import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import './Header.css'

const Header: React.FC = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <nav className='navigation'>
      <div className='flex items-center text-white'>
        <a className='logo' href='#'>
          <div className='text-2xl pl-2 whitespace-nowrap'>
            Alex S
          </div>
        </a>
      </div>

      <div className={`menu-block`}>
        <ul className='flex justify-end'>
          <li className='mx-3'>
            <a className='menu-item group' href='#'>
              <span className='sidebar-hint group-hover:scale-100'>Search</span>
              <i className='fas fa-search' />
            </a>
          </li>
          <li className='mx-3'>
            <span className='menu-item theme-toggler group' onClick={handleMode}>
              {darkTheme ? (
                <i className='fas fa-sun' />
              ) : (
                <i className='fas fa-moon' />
              )}
            </span>
          </li>
          <li className='mx-3 text-center'>
            <a
              className='menu-item group'
              href='#'
            >
              <span className='sidebar-hint group-hover:scale-100'>Pro</span>
              <i className='fas fa-rocket' />
            </a>
          </li>
          <li className='mx-3'>
            <a
              className='menu-item group'
              href='#'
            >
              <span className='sidebar-hint group-hover:scale-100'>Login</span>
              <i className='fas fa-sign-in-alt' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
