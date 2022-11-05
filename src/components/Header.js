import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="navitem">Books</NavLink>
        <NavLink to="/categories" className="navitem">Categories</NavLink>
      </nav>
    </header>
  );
}

export default Header;
