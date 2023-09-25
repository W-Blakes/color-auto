import React from 'react';
import './Header.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="header">
      <Link href="/">
        <div className="brand">
          <p className="logo-img"></p>
          <p className="brand-text">Dream Whip Buildr</p>
        </div>
      </Link>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
        {/* <button className="btn">Logout</button> */}
      </ul>
    </nav>
  );
};

export default Navbar;
