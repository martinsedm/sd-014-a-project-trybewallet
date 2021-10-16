import React from 'react';
import Header from '../component/Header';
import FormWallet from '../component/FormWallet';
import TableForm from '../component/TableForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormWallet />
        <TableForm />
      </div>
    );
  }
}

export default Wallet;
