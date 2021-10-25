import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>TrybeWallet</h1>
        <Header />
        <form
          onSubmit={ (e) => {
            e.preventDefault();
          } }
        >
          <Input
            htmlFor="value"
            text="Valor"
            value={ 0 }
            handleChange={ () => null }
            type="number"
          />
        </form>
      </div>
    );
  }
}

export default Wallet;
