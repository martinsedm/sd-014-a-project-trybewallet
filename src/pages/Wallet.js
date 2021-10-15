import React from 'react';
import Header from '../components/Header';
import ExpenditureForm from '../components/ExpenditureForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenditureForm />
      </div>
    );
  }
}

export default Wallet;
