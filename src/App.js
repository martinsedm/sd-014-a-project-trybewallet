import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login';

function App() {
  return (
    <Route component={ Login } path="/" exact />
  );
}

export default App;
