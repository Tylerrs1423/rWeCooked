
import React, { useState } from 'react';

function DarkModeSwitch({ theme, setTheme }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    setDropdownOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 9999 }}>
      <div className="dropup">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          data-bs-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          Theme: {theme === 'dark' ? 'Dark' : 'Light'}
        </button>

        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} style={{ transform: 'translateY(-100%)' }}>
          <li>
            <button className="dropdown-item" onClick={() => toggleTheme('light')}>
              Light Mode
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => toggleTheme('dark')}>
              Dark Mode
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DarkModeSwitch;
