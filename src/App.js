import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

const App = () => (
  <Switch>
    <div className="container">
      <Route exact path="/" component={Login} />
      <Route path="/carteira" component={Wallet} />
    </div>
  </Switch>
);

export default App;
