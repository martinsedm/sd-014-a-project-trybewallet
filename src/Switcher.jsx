import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
// import Wallet from './pages/Wallet';

class Switcher extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default Switcher;
