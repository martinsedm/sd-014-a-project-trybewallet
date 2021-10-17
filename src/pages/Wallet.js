import React, { Component } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Tabela from '../components/Tabela';

export default class Wallet extends Component {
  render() {
    return (
      <main>
        carteira
        <Header />
        <Form />
        <Tabela />
      </main>
    );
  }
}
