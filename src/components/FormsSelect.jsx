import React from 'react';
import PropTypes from 'prop-types';

class FormsSelect extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <>
        <label htmlFor="input-moeda">
          Moeda
          <select id="input-moeda" name="currency">
            { currencies.map((currencie) => (
              <option
                key={ currencie }
              >
                { currencie }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="input-pagamento">
          Método de pagamento
          <select id="input-pagamento" name="method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-categoria">
          Tag
          <select id="input-categoria" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar Despesa</button>
      </>
    );
  }
}

FormsSelect.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormsSelect;
