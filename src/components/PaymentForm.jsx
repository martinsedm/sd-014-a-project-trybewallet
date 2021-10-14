import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentForm extends Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label htmlFor="payment-form">
        Método de pagamento
        <select value={ value } onChange={ onChange } name={ name } id="payment-form">
          <option value="Money">Dinheiro</option>
          <option value="CreditCard">Cartão de Crédito</option>
          <option value="DebitCard">Cartão de Débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentForm;

PaymentForm.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
