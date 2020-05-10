import React from 'react';

// Components

// Static

import { lastCities } from './data';

// Styles

import './styles.scss';

// --------------------

export const LastCities = () => {
  return (
    <div className="container-city">
      {lastCities.map((city, index) => {
        return (
          <div className="container-city__block" key={index}>
            <p className="container-city__block-city">{city.title}</p>
            <div className="container-city__block-wrapper">
              <p className="container-city__block-wrapper--value">{city.lon}</p>
              <p className="container-city__block-wrapper--value">{city.lat}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LastCities;
