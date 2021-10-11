import React from 'react';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import AddExpense from '../components/AddExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <ExpenseTable />
      </>
    );
  }
}

export default Wallet;
