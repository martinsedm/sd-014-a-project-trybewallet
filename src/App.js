import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Header from './pages/Header';

class App extends Component {
  render() {
    return (
      <div>
        TrybeWallet!
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
          <Route path="/header" component={ Header } />

        </Switch>
      </div>
    );
  }
}

export default App;
