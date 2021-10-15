import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/wallet" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}
