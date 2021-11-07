import React from 'react';
import useDarkMode from "../../../hooks/useDarkMode";

const ThemeSwitcher = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <li className='mx-3'>
      <span className='menu-item theme-toggler group' onClick={handleMode}>
        {darkTheme ? (
          <i className='fas fa-sun' />
        ) : (
          <i className='fas fa-moon' />
        )}
      </span>
    </li>
  );
};

export default ThemeSwitcher;
