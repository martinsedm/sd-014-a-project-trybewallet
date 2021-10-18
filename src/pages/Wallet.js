import React from 'react';
import FormAddDebt from '../components/FormAddDebt';
import HeaderWallet from '../components/HeaderWallet';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <HeaderWallet />
        <FormAddDebt />
      </>
    );
  }
}

export default Wallet;
