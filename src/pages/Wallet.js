import React from 'react';
import Forms from '../component/Forms';
import Header from '../component/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Forms />
      </div>
    );
  }
}

export default Wallet;
