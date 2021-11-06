import React from 'react';
import PropTypes from 'prop-types';

class Exchange extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            type="text"
            id="pagamento"
            name="pagamento"
            onChange={ handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

      </div>
    );
  }
}
Exchange.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Exchange;
