import React from 'react';
import FormExpenditure from '../components/FormExpenditure';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <FormExpenditure />
        <div>TrybeWallet</div>
      </main>
    );
  }
}

export default Wallet;
