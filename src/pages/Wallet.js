import React from 'react';
import Formulario from '../Component/Formulario';
import Header from '../Component/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Formulario />
      </div>
    );
  }
}

export default Wallet;
