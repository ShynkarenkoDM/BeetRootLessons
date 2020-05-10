import React from 'react';

// Components
import { ContentContainer } from '../../components/ContentContainer';
import { Header } from '../../../src/components/Header';
import { Title } from '../../../src/components/Title';
import { CityCard } from '../../pages/HomePage/components/CityCard';
import { Subtitle } from '../../components/Subtitle';

// Styles
import './../../styles/fonts.scss';
import './styles.scss';

// --------------------

export const HomePage = () => {
  return (
    <div className="home">
      <ContentContainer>
        <div className="home__container">
          <Title paddingTop title="Weather Forecast" />
          <Subtitle title="Choose Your City" />
          <CityCard />
        </div>
      </ContentContainer>
      <Header />
    </div>
  );
};
