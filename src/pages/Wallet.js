import React from 'react';
import Header from '../components/Header';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div className="h-screen bg-gray-300">
        <Header />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
