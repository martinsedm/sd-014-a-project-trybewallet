import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MethodMapForm extends Component {
  render() {
    const { value, onChange } = this.props;
    const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            id="pagamento"
            name="pagamento"
            value={ value }
            onChange={ onChange }
          >
            { paymentOptions.map((option) => (
              <option key={ option } value={ option }>{option}</option>))}
          </select>
        </label>
      </div>
    );
  }
}

MethodMapForm.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MethodMapForm;
