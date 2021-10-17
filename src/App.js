import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route>
          <Login exact path="/" component={ Login } />
        </Route>
      </Switch>

    );
  }
}

export default App;
