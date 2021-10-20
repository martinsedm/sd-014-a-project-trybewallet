import React from 'react';
import Header from '../components/header';
import Addfinance from '../components/addfinance';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Addfinance />
      </>
    );
  }
}

export default Wallet;
