import React from 'react';
import Header from './Header';
import WalletFormulario from './WalletFormulario';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletFormulario />
      </div>
    );
  }
}

export default Wallet;
