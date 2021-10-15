import React from 'react';
import Header from '../component/Header';
import FormWallet from '../component/FormWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
