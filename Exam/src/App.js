// Styles

import './styles/fonts.scss';
import './styles/index.scss';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Containers

import { Routes } from './containers/Routes';

// --------------------

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
