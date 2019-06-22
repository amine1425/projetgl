import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './components/Test';
import FirstTry from './components/FirstTry';
import Login from './components/Login';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/Test" component={Test} />
        <Route path="/FirstTry" component={FirstTry} />
        <Route path="/Login" component={Login} />
    </Switch>
  </BrowserRouter>
);