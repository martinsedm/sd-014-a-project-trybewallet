import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <header>
          <Header />
        </header>
        <section>
          <WalletForm />
          <WalletTable />
        </section>
      </main>
    );
  }
}

export default Wallet;
