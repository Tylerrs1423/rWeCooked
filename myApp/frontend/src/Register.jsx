import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/auth/register', { //fetch call here for backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setMsg(data.message || 'Registration successful!');
      } else {
        setMsg(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      setMsg('Error while registering.');
    }
  };

  return (
    <div className="container-fluid" style={{ minHeight: '92vh' }}>
      <div className="row">
        {/* LEFT COLUMN with a different gradient */}
        <div
          className="col-md-6 d-flex flex-column align-items-center justify-content-center text-white"
          style={{
            background: 'linear-gradient(135deg,rgb(255, 195, 113), #ffd452)',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h1>Join Us!</h1>
          <p className="lead" style={{ maxWidth: '400px' }}>
            Create an account to get started.
          </p>
        </div>

        {/* RIGHT COLUMN (official form-floating style) */}
        <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
          <main className="form-signin" style={{ width: '100%', maxWidth: '420px' }}>
            <form onSubmit={handleRegister}>
              <h1 className="h3 mb-3 fw-normal text-center">Please sign up</h1>

              {msg && <div className="alert alert-info">{msg}</div>}

              <div className="form-floating mb-3">
                <input
                  id="floatingInput"
                  type="email"
                  className="form-control"
                  
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  id="floatingPassword"
                  type="password"
                  className="form-control"
                  
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button className="w-100 btn btn-lg btn-success" type="submit">
                Sign up
              </button>
              <p className="mt-5 mb-3 text-muted text-center">&copy; 2025</p>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Register;
