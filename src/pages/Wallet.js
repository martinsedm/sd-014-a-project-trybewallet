import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
import Header from '../components/Header';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        Wallet
        <Header />
        <ExpensesForm />
        <ExpenseTable />
      </>
    );
  }
}

export default Wallet;
