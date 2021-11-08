import React from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>

        <h1>TrybeWallet</h1>
        <Header />
        <ExpenseForm />

      </div>
    );
  }
}

export default Wallet;
