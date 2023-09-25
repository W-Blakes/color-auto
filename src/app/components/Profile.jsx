import './Profile.css';
import Link from 'next/link';

import React from 'react';

const Profile = ({ msg }) => {
  return (
    <div>
      <div className="profile">
        <h1 className="profile-img"></h1>
        <p className="edit-btn">
          <Link href="/userprofile">edit</Link>
        </p>
        <p>{msg}</p>
        <div className="border-bottom"></div>
      </div>
    </div>
  );
};

export default Profile;
