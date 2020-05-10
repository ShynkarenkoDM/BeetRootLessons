import React from 'react';
// Components

import Navbar from '../../components/Header/components/Navbar';

// Data

import { navigationLinks } from '../../components/Header/data';

// Styles

import './styles.scss';

// ----------------

const Header = () => {
  return (
    <div className="header">
      <div className="content-container header__container">
        <div className="header__logo">Weather</div>
        <Navbar links={navigationLinks} />
      </div>
    </div>
  );
};

export { Header };
