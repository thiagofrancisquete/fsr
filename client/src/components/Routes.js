import React from 'react';

import { Router, Switch, Route } from 'react-router';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

import { history } from '../history';
import NotFound from './NotFound.component';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
