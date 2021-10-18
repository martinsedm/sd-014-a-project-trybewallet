import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Pagamento extends Component {
  render() {
    const { change, value } = this.props;
    return (
      <label htmlFor="pag">
        {'Método de pagamento: '}
        <select name="method" id="pag" onChange={ change } value={ value }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

Pagamento.propTypes = {
  change: PropTypes.func,
}.isRequired;

export default Pagamento;
