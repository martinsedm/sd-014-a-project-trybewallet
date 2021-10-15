import React from 'react';
import FormExpense from '../components/Form/FormExpense';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpense />
      </div>
    );
  }
}

export default Wallet;
