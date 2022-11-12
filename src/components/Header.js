import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/function-component-definition
const Header = () => (
  <header className="header">
    <h1>Bookstore CMS</h1>
    <nav className="navbar">
      <NavLink to="/" className="navitem">Books</NavLink>
      <NavLink to="/categories" className="navitem">Categories</NavLink>
    </nav>
    <div className="user-icon">
      <i className="fa-solid fa-user" />
    </div>
  </header>
);

export default Header;
