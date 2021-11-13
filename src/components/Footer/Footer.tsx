import React from 'react';
import './Footer.css'
import FooterLink from "./FooterLink/FooterLink";

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='container mx-auto px-4'>
        <div className='footer-contact-section'>
          <h5 className='text-xl font-bold mb-6 text-center'>Stay connected</h5>
          <div className='flex justify-center'>
            <FooterLink
              link='https://github.com/Algoritm211'
              icon={<i className='fab fa-github' />} />
            <FooterLink
              className='mx-5'
              link='https://t.me/Alexey_Horbunov'
              icon={<i className='fab fa-telegram' />} />
            <FooterLink
              link='https://www.linkedin.com/in/alexey-horbunov211/'
              icon={<i className='fab fa-linkedin' />} />
          </div>
        </div>
        <div className='footer-author-section'>
          <div className='flex justify-center leading-7'>
            Made with <i className='fab fa-react react-icon' /> by Alexey Horbunov
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
