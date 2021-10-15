import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import SelectCurrency from '../components/SelectCurrency';
import SelectPayment from '../components/SelectPayment';
import SelectTag from '../components/SelectTag';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Input
          label="Valor"
          type="text"
          name="value"
          id="value"
          placeholder="Valor"
        />
        <Input
          label="Descrição"
          type="text"
          name="description"
          id="description"
          placeholder="Descrição"
        />
        <SelectCurrency
          label="Moeda"
          name="currency"
          id="currency"
        />
        <SelectPayment
          label="Método de pagamento"
          name="payment"
          id="payment"
        />
        <SelectTag
          label="Tag"
          name="tag"
          id="id"
        />
      </>
    );
  }
}

export default Wallet;
