import React, { Component } from 'react';

class PaymentForm extends Component {
  render() {
    return (
      <label htmlFor="payment-form">
        Método de pagamento
        <select id="payment-form">
          <option value="Money">Dinheiro</option>
          <option value="CreditCard">Cartão de Crédito</option>
          <option value="DebitCard">Cartão de Débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentForm;
