import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import ExpensesTable from '../components/ExpensesTable';
// componente ler o state global para passar a lista de despesas para o componente ExpensaTable

class Wallet extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
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
