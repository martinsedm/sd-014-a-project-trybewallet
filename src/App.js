import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route path="/professionalForm" component={ ProfessionalForm } />
        <Route path="/formDisplay" component={ FormDataDisplay } /> */}
      </Switch>
    </div>
  );
}

export default App;
