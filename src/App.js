import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } /> */}
        <Route exact path="*" component={ NotFound } />
      </Switch>
  );
}

export default App;
