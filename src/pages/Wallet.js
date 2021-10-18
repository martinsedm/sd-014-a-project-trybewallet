import React from 'react';
import AddDesp from './AddDesp';
import Header from './Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddDesp />
      </div>
    );
  }
}

export default Wallet;
