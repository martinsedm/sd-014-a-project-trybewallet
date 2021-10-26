import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        Wallet
        <Header />
        <ExpensesForm />
      </>
    );
  }
}

export default Wallet;
