import React from 'react';
import AddDesp from '../components/AddDesp';
import Header from '../components/Header';

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
