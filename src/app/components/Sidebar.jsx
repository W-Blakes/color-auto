'use client';

import React from 'react';
import Link from 'next/link';
import Profile from './Profile';
import { usePathname } from 'next/navigation';

//style
import './Sidebar.css';

const Sidebar = () => {
  const message = 'hello, user';
  const path = usePathname();

  const sidebarLinks = [
    { name: 'dashbosrd', link: '/' },
    { name: 'create project', link: '/create' },
  ];
  return (
    <div className="sidebar">
      <Profile msg={message} />
      <div className="menu">
        {sidebarLinks.map((li) => (
          <p key={li.name}>
            <Link
              href={li.link}
              className={`${path === li.link ? 'active' : ''}`}
            >
              {li.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
