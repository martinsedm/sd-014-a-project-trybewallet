import React from 'react';

import Header from '../components/Header';
import FormAddExpenses from '../components/FormAddExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <FormAddExpenses />
      </main>
    );
  }
}

export default Wallet;
