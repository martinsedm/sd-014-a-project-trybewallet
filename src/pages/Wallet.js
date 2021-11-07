import React from 'react';

import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <ExpensesForm />
          <ExpensesTable />
        </main>
      </div>
    );
  }
}

export default Wallet;
