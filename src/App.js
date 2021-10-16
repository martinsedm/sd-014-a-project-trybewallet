import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Login /> } />
      <Route pathc="/carteira" render={ () => <Wallet /> } />
    </Switch>
  );
}

export default App;
