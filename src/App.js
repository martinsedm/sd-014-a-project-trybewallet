import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/carteira"><Wallet /></Route>
        <Route><Redirect to="/" /></Route>
      </Switch>
    );
  }
}

export default App;
