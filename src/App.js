import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <div>Hello, TrybeWallet!</div>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </Provider>
    );
  }
}

export default App;
