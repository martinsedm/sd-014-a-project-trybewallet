import React from 'react';
import PropTypes from 'prop-types';

class PaymentSelect extends React.Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <label htmlFor="select-payment">
        Método de pagamento:
        <select
          name="method"
          id="select-payment"
          value={ method }
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentSelect.propTypes = {
  method: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PaymentSelect;
