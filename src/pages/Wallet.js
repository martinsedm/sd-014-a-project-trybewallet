import React from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';

export default class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseForm />
      </>
    );
  }
}
