import React from 'react';
import { Switch, Route } from 'react-router-dom';

import login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route path="/" component={ login } />
    </Switch>
  );
}

export default App;
