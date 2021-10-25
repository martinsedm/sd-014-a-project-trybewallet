import React from 'react';
import PropTypes from 'prop-types';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [{}],
      total: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleExchangeRates = this.handleExchangeRates.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleExchangeRates() {
    const { expensesAct } = this.props;
    // const { currency } = this.state;
    const fetchExchRates = await fetch('https://economia.awesomeapi.com.br/json/all');
    const fetchJson = await fetchExchRates.json();
    this.setState({ exchangeRates: fetchJson });
    expensesAct(this.state);
  }

  render() {
    const { coins } = this.props;
    const { total } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="despesa">
            Valor
            <input type="text" name="value" id="despesa" onChange={ this.handleChange } />
          </label>
          <label htmlFor="d">
            Descrição
            <input type="text" name="description" id="d" onChange={ this.handleChange } />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="currency" onChange={ this.handleChange }>
              { Object.keys(coins).map((coin) => <option key={ coin }>{ coin }</option>) }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento" name="method" onChange={ this.handleChange }>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag
            <select id="Tag" name="tag" onChange={ this.handleChange }>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleExchangeRates }
          >
            Adicionar despesa
          </button>
        </form>
        <h2 data-testid="total-field">{total}</h2>
      </div>
    );
  }
}

WalletForm.propTypes = {
  coins: PropTypes.objectOf().isRequired,
  expensesAct: PropTypes.func.isRequired,
};

export default WalletForm;
