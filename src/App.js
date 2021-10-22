import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

// Importando as Pages:
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
