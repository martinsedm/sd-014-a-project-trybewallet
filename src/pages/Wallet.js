import React from 'react';
import Header from '../components/Header';
import ExpendituresForm from '../components/ExpendituresForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpendituresForm />
        <Table />
      </div>
    );
  }
}

export default Wallet;
