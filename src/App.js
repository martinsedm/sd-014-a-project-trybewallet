import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import store from './store';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
