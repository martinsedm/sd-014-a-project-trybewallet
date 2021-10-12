import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
        <BrowserRouter>
          <Switch>
  <Route exact path="/" component={Login}/> 
  </Switch>
        </BrowserRouter>
  )
}

export default App;
