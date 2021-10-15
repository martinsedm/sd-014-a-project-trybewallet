import React from 'react';

class SelectPayment extends React.Component {
  render() {
    const { method, handleChange } = this.props;

    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select id="payment-method" onChange={ handleChange } value={ method } name="method">
          <option value="cash">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default SelectPayment;
