import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends Component {
  render() {
    const { name, label, id, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethod.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

PaymentMethod.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
};

export default PaymentMethod;
