import React from 'react';
import './Header.css'
import HeaderLink from "./HeaderLink/HeaderLink";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

const Header: React.FC = () => {
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
          <HeaderLink
            hintText='Search'
            href=''
            icon={<i className='fas fa-search' />} />
          <ThemeSwitcher />
          <HeaderLink
            hintText='Pro'
            href='#'
            icon={<i className='fas fa-rocket' />} />
          <HeaderLink
            hintText='Login'
            href='#'
            icon={<i className='fas fa-sign-in-alt' />} />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
