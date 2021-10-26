import React from 'react';
import PropTypes from 'prop-types';

class Method extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const metodosPagemento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        <label htmlFor="method">
          Método de Pagamento
          <select
            type="text"
            name="method"
            value={ value }
            onChange={ onChange }
            id="method"
          >
            { metodosPagemento.map((metodoPagamento) => (
              <option
                key={ metodoPagamento }
                value={ metodoPagamento }
              >
                { metodoPagamento }
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

Method.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Method;
