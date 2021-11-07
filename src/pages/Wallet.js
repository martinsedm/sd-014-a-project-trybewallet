import React from 'react';
import Header from './Header';
import WalletFormulario from './WalletFormulario';
import WalletTabela from './WalletTabela';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletFormulario />
        <WalletTabela />
      </div>
    );
  }
}

export default Wallet;
