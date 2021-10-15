import React from 'react';
import { Route } from 'react-router';

import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Route path="/" component={ Login } />
    );
  }
}

export default App;
