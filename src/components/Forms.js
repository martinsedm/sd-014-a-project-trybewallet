import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.getCurrencies = this.getCurrencies.bind(this);
  }

  getMoedas() {
    const { moedas } = this.props;
    const lista = moedas.map((moeda) => Object.keys(moeda));
    const result = lista[0].filter((moeda) => moeda !== 'USDT')
      .map((moeda) => <option key={ moeda }>{moeda}</option>);
    return result;
  }

  render() {
    return (
      <form>
        <label htmlFor="inputValue">
          valor
          <input type="number" id="inputValue" />
        </label>
        <label htmlFor="moeda">
          moeda
          <select id="moeda">
            {this.getCurrencies()}
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit_card">Cartão de crédito</option>
            <option value="debit_card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag
          <select id="tag">
            <option value="comida">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" id="describe" />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

Forms.propTypes = ({
  moedas: PropTypes.array,
}).isRequired;

export default connect(mapStateToProps)(Forms);
