import React from 'react';
import Header from '../Components/Header';
import FormWallet from '../Components/FormWallet';

export default class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <FormWallet />
        </main>
      </div>);
  }
}
