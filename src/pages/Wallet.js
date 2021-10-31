import React from 'react';

import Header from '../components/Header';
import FormAddExpenses from '../components/FormAddExpenses';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <FormAddExpenses />
        <TableExpenses />
      </main>
    );
  }
}

export default Wallet;
