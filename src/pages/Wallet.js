import React from 'react';
import { Header, ExpensesForm } from '../components';

class Wallet extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <ExpensesForm />
      </div>
    );
  }
}

export default Wallet;
