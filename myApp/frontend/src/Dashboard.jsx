
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProtected = async () => {
      try {
        const response = await fetch('/auth/protected', {
          method: 'GET',
          credentials: 'include', //protected the cookie
        });
        const data = await response.json();
        if (response.ok) {
          setInfo(data.message || 'Welcome to your dashboard!');
        } else {
          setError(data.error || 'Not authorized, please log in');
        }
      } catch (err) {
        console.error(err);
        setError('Server error');
      }
    };

    fetchProtected();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {info && <div className="alert alert-success">{info}</div>}
      <p>This is a protected webpage, please log in to acces.</p>
    </div>
  );
}

export default Dashboard;
