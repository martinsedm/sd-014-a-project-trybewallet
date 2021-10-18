import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

// import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        TrybeWallet!
        <Switch>
          <Route path="/carteira" component={ Wallet } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
