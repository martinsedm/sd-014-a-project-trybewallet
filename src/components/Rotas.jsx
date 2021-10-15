import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class Rotas extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Rotas;
