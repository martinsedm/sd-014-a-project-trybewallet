import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SwitcherRoute from './component/SwitcherRoute';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          <SwitcherRoute />
        </Provider>
      </div>
    );
  }
}

export default App;
