import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

export default class Wallet extends React.Component {
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
