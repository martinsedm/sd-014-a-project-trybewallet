import React from 'react';
import { Switch, Route } from 'react-router-dom';

import login from './pages/Login';
import wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/carteira" component={ wallet } />
      <Route path="/" component={ login } />
    </Switch>
  );
}

export default App;
