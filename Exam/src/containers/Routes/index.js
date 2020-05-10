import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages

import { HomePage } from '../../pages/HomePage';
import { SelectPage } from '../../pages/SelectPage';
import { CurrentCity } from '../../pages/CurrentCity';

// --------------------

export const Routes = () => {
  return (
    <Switch>
      <Route component={HomePage} path="/" exact />
      <Route component={SelectPage} path="/select-page" exact />
      <Route component={CurrentCity} path="/google-map" exact />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};
