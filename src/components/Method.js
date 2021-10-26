import React from 'react';
import PropTypes from 'prop-types';

class Method extends React.Component {
  render() {
    const { metodo } = this.props;
    const [name, method, onChange] = metodo;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          type="text"
          name={ name }
          id="method"
          value={ method }
          onChange={ onChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>);
  }
}

Method.propTypes = {
  metodo: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default Method;
