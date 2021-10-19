import React from 'react';
import AddDesp from '../components/AddDesp';
import Header from '../components/Header';
import AddTabelaGastos from '../components/AddTabelaGastos';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddDesp />
        <AddTabelaGastos />
      </div>
    );
  }
}

export default Wallet;
