import React from 'react';

// Components
import { ContentContainer } from '../../components/ContentContainer';
import { Header } from '../../../src/components/Header';
import Button from './../../../src/components/Button';
import FontIcon from './../../../src/pages/SelectPage/components/FontIcon';
import Input from './../../../src/pages/SelectPage/components/Input';
import Title from './../../components/Title';
import LastCities from './../SelectPage/components/LastCities';

// Styles
import './../../styles/fonts.scss';
import './styles.scss';

// --------------------

export const SelectPage = () => {
  return (
    <div className="select">
      <ContentContainer>
        <div className="select__container">
          <div className="select__search-wrapper">
            <Input placeholder="Please Search Your City" />
            <div className="select__search-btn-wrapper">
              <Button>
                <FontIcon icon="search" />
              </Button>
            </div>
          </div>
          <Title marginTop />
          <LastCities />
        </div>
      </ContentContainer>
      <Header />
    </div>
  );
};
