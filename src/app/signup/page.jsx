'use client';

import React, { useEffect, useState } from 'react';
import './signup.css';

const SignupPage = (e) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
    setEmail('');
    setPassword('');
    setDisplayName('');
    setThumbnail(null);
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
    setDisplayName('');
    setThumbnail(null);
  }, []);

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
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
          <span>display name:</span>
          <input
            type="text"
            value={displayName}
            onChange={({ target }) => setDisplayName(target?.value)}
            required
          />
        </label>

        <label>
          <span>Thumbnail:</span>
          <input
            type="file"
            className="thumbnail-input"
            onChange={({ target }) => setThumbnail(target?.files[0].name)}
            autoComplete="photo"
          />
        </label>

        <label>
          <button className="btn">Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SignupPage;
