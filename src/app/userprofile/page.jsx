'use client';
import React from 'react';
import Profile from '../components/Profile';
import { useState, useEffect } from 'react';
//style
import './userprofile.css';

const UserProfilePage = (e) => {
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
    <div className="profile-container">
      <label className="profile-label">
        <span className="profile-span">Change Profile Pic:</span>
        <input
          type="file"
          className="thumbnail-input"
          onChange={({ target }) => setThumbnail(target?.files[0].name)}
          autoComplete="photo"
        />
      </label>
      <Profile />
      <h1>User Name</h1>

      <div className="profile-details">
        <form className="user-form" onSubmit={handleSubmit}>
          <h4>Profile details</h4>
          <label>
            <span>Email:</span>
            <input
              value={email}
              type="email"
              onChange={({ target }) => setEmail(target?.value)}
              required
              autoComplete="username"
            />
          </label>

          <label>
            <span>Password:</span>
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
            <button className="btn">Update</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default UserProfilePage;
