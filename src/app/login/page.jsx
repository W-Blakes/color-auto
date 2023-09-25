'use client';

import React, { useState, useEffect } from 'react';
import './login.css';

const LoginPage = (e) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          <span>Email</span>
          <input
            value={email}
            type="email"
            onChange={({ target }) => setEmail(target?.value)}
            required
            autoComplete="current-email"
          />
        </label>

        <label>
          <span>Password</span>
          <input
            value={password}
            type="password"
            onChange={({ target }) => setPassword(target?.value)}
            required
            autoComplete="current-password"
          />
        </label>

        <label>
          <button className="btn">Submit</button>
        </label>
      </form>
    </div>
  );
};

export default LoginPage;
