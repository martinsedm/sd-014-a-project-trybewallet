import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login, Wallet } from './pages';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ (props) => <Login { ...props } /> } />
      <Route path="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
