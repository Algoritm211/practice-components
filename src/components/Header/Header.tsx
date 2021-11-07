import React, { useState } from 'react';
import './Header.css'

const Header: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-5 fixed w-full z-10 top-0">
      <div className="flex items-center text-white">
        <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
          <div className="text-2xl pl-2 whitespace-nowrap">Alex S</div>
        </a>
      </div>

      <div className={`menu-block`}>
        <ul className="flex justify-end">
          <li className="mx-3">
            <a className="menu-item group" href="#">
              <span className='sidebar-hint group-hover:scale-100'>Search</span>
              <i className="fas fa-search" />
            </a>
          </li>
          <li className="mx-3 text-center">
            <a
              className="menu-item group"
              href="#"
            >
              <span className='sidebar-hint group-hover:scale-100'>Pro</span>
              <i className="fas fa-rocket" />
            </a>
          </li>
          <li className="mx-3">
            <a
              className="menu-item group"
              href="#"
            >
              <span className='sidebar-hint group-hover:scale-100'>Login</span>
              <i className="fas fa-sign-in-alt" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
