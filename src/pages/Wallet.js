import React from 'react';
import WalletForm from '../components/WalletForm';
import WalletHeader from '../components/WalletHeader';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <WalletHeader />
        <WalletForm />
        <WalletTable />
      </section>
    );
  }
}

export default Wallet;
