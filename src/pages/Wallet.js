import React from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>

        <h1>TrybeWallet</h1>
        <Header />
        <ExpenseForm />
        <ExpenseTable />

      </div>
    );
  }
}

export default Wallet;
