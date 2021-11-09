import React from 'react';
import Wallet from './pages/Wallet';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path="/" component = { Login } />
      <Route path="/carteira" component = { Wallet } />
    </Switch>
)}

export default App;
