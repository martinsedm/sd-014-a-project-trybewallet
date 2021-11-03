import React from 'react';
import PropTypes from 'prop-types';

class SelectedMethod extends React.Component {
  render() {
    const { name, onChange, value } = this.props;
    return (
      <label htmlFor="select-method">
        Método de pagamento
        <select
          name={ name }
          id="select-method"
          onChange={ onChange }
          value={ value }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectedMethod.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectedMethod;
