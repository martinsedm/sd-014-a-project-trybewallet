import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/profile"><Wallet /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
