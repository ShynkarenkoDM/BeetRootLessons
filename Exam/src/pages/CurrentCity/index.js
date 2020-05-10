import React from 'react';

// Components
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Forecast } from '../../pages/CurrentCity/components/Forecast';
import GoogleMap from '../../pages/CurrentCity/components/GoogleMap';

// Styles
import './../../styles/fonts.scss';
import './styles.scss';

// --------------------

export const CurrentCity = () => {
  return (
    <div className="current-city">
      <div className="current-city__container">
        <div className="current-city__forecast">
          <Title paddingTop title="Current City" />
          <Forecast />
        </div>
        <div className="current-city__google-map">
          <GoogleMap />
        </div>
      </div>
      <Header />
    </div>
  );
};
