import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/carteira" component={ Wallet } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
