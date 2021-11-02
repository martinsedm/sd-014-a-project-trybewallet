import React from 'react';
import PropTypes from 'prop-types';

class SelectedMethod extends React.Component {
  render() {
    const { name, onChange, value } = this.props;
    return (
      <label htmlFor="select-method">
        Método de pagamento
        <select name={ name } id="select-method" onChange={ onChange } value={ value }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
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
