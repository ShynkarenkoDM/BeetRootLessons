import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles

import './styles.scss';

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      {links.map(({ label, to }, index) => {
        return (
          <NavLink
            activeClassName="navbar__item--active"
            className="navbar__item"
            key={index}
            to={to}
            exact
          >
            {label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
