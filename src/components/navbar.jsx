
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.documentElement.classList.toggle('dark-mode', darkMode);

    localStorage.setItem(
      'portfolio-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/project' }
  ];

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate('/')}>
        MY PORTFOLIO
      </h2>

      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.path}
            className={
              location.pathname === link.path ? 'active' : ''
            }
            onClick={() => navigate(link.path)}
          >
            {link.name}
          </button>
        ))}
      </div>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label={
          darkMode ? 'Switch to light mode' : 'Switch to dark mode'
        }
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
}

export default Navbar;
