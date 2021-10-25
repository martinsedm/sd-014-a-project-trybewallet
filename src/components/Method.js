import React from 'react';
import PropTypes from 'prop-types';

class Method extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const metodosPagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        <label htmlFor="method">
          Método de pagamento
          <select
            type="text"
            value={ value }
            name="method"
            onChange={ onChange }
            id="method"
          >
            {metodosPagamento.map((metodoPagamento) => (
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
