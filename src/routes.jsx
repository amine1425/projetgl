import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './components/Test';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/Test" component={Test} />
    </Switch>
  </BrowserRouter>
);