import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { methods } from '../data';

export default class PaymentInput extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="payment" className="text-white d-flex">
        Método de pagamento:
        <select
          name="method"
          id="payment"
          className="form-select ms-2 w-50"
          onChange={ onChange }
          value={ value }
        >
          { methods.map(({ id, name }) => (
            <option value={ id } key={ id }>{name}</option>
          ))}

        </select>

      </label>
    );
  }
}

PaymentInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
