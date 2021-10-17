import React from 'react';
import PropTypes from 'prop-types';

class Method extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="method">
        Método de pagamento
        <select name="method" id="method" onChange={ onChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

Method.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Method;
