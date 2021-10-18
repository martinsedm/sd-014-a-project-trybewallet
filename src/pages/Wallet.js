import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>TrybeWallet</div>
        <Form />
      </>
    );
  }
}

export default Wallet;
