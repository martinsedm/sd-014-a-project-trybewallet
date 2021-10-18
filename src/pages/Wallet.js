import React from 'react';
import ExpensesTable from '../components/ExpensesTable';
import HeaderWallet from '../components/HeaderWallet';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <HeaderWallet />
        <main>
          <ExpensesTable />
        </main>
      </>
    );
  }
}

export default Wallet;
