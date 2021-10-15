import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        TrybeWallet!
        <Provider store={ store }>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Login } />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
