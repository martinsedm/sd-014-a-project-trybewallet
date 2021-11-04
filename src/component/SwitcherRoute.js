import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class SwitcherRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default SwitcherRoute;
