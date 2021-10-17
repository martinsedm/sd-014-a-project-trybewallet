import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
