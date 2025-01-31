import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import ThemeContext from '../contexts/ThemeContext';

function ThemeButton() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <button
        className='theme-button'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}

export default ThemeButton;
