/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-circle"></div>
        </div>
        <div className="nav-menu">
          <a href="/" className="nav-item">Home</a>
          <a href="/team" className="nav-item">Team</a>
          <a href="/science" className="nav-item">Science</a>
          <a href="/public" className="nav-item active">Public</a>
          <a href="/publications" className="nav-item">Publications</a>
          <a href="/opportunities" className="nav-item">Opportunities</a>
          <a href="/resources" className="nav-item">Resources</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
