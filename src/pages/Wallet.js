import React from 'react';
import AddDesp from './addDesp';
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
