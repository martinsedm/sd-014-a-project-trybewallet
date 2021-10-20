import React from 'react';
import Header from '../components/Header';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div className="h-screen bg-gray-300 flex flex-col space-y-8">
        <Header />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
