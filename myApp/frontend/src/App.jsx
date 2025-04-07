import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import CoverHome from './CoverHome'; 

function App() {
  const [theme, setTheme] = useState('light'); // default light mode

  // Add or remove classes from body based on dark or light
  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
  }, [theme]);

  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg my-custom-navbar"> {/*overide bootstrap light primary color*/}
      <div className="container">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            BlueprintWebsite
          </Link>
          {/* Toggler for phone screens */}
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-toggle="collapse"
            aria-controls="navbarNavAltMarkup"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<CoverHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* accessibility control */}
      <DarkModeSwitch theme={theme} setTheme={setTheme} />
    </Router>
  );
}

export default App;
