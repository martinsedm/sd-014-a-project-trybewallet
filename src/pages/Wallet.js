// Informações da Página da Carteira.

import React from 'react';
import FormExpense from '../components/FormExpense';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        Carteira.
        <Header />
        <FormExpense />
      </div>
    );
  }
}

export default Wallet;
