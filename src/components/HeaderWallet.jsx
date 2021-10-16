import React, { Component } from 'react';
import FormsAddexpense from './FormsAddExpense';
import ExpenseTable from './ExpenseTable';

class HeaderWallet extends Component {
  render() {
    return (
      <header>
        {// aqui le o estado global e usa o email e totaliza o que esta no state
        }
        <FormsAddexpense />
        <ExpenseTable />
      </header>
    );
  }
}

export default HeaderWallet;
