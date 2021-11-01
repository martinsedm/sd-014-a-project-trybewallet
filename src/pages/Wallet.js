import React from 'react';

import Header from '../Components/Header';
import Form from '../Components/Form';
import Despesas from '../Components/Despesas';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Despesas />
      </>
    );
  }
}

export default Wallet;
