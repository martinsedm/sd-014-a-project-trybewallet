import React from 'react';
import Header from '../components/Header';
import ExpendituresForm from '../components/ExpendituresForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpendituresForm />
      </div>
    );
  }
}

export default Wallet;
