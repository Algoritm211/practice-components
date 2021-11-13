import React from 'react';
import './HeaderLink.css'

type HeaderLinkPropsType = {
  hintText: string,
  icon: JSX.Element,
  href: string
}

const HeaderLink: React.FC<HeaderLinkPropsType> = (
  { hintText, icon, href}
) => {
  return (
    <li className='mx-3'>
      <a className='menu-item group' href={href}>
        {icon}
      <div className='sidebar-hint group-hover:scale-100'>{hintText}</div>
      </a>
    </li>
  );
};

export default HeaderLink;
