import React from 'react';
import './FooterLink.css';

type FooterLinkPropsType = {
  link: string,
  icon: JSX.Element,
  className?: string
}

const FooterLink: React.FC<FooterLinkPropsType> = ({ link, icon, className }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className={`footer-icon ${className}`}
    >
      {icon}
    </a>
  );
};

export default FooterLink;
