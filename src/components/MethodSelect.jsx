import React from 'react';
import PropTypes from 'prop-types';

class MethodSelect extends React.Component {
  render() {
    const options = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { onChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          name="method"
          id="method"
          onChange={ onChange }
        >
          { options.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>))}
        </select>
      </label>
    );
  }
}

MethodSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default MethodSelect;
