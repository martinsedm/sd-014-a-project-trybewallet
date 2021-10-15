import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/carteira">
        <Header />
        <Wallet />
      </Route>
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
