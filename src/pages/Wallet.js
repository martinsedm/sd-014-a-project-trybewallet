import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import ExpenseTable from '../components/ExpenseTable';
// componente ler o state global para passar a lista de despesas para o componente ExpensaTable

class Wallet extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        <HeaderWallet />
        <main>
          <ExpenseTable />
        </main>
      </>
    );
  }
}

export default Wallet;
