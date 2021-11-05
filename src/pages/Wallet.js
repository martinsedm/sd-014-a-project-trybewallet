// Carrega as Informações da Página do cabeçalho e do Formulario de despesas e da tabela de despesas para dentro da Página de Carteira.

import React from 'react';
import FormExpense from '../components/FormExpense';
import TableExpenses from '../components/TableExpenses';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpense />
        <TableExpenses />
      </div>
    );
  }
}

export default Wallet;
