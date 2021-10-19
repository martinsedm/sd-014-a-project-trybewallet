import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gravaConta } from '../actions';
import Inputs from '../Components/Inputs';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      moedas: [],
      total: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };
    this.changerValue = this.changerValue.bind(this);
    this.gravar = this.gravar.bind(this);
  }

  componentDidMount() {
    this.fetchMoney();
  }

  async fetchMoney() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    this.setState({ moedas: Object.keys(result) });
  }

  changerValue(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async gravar(event) {
    event.preventDefault();
    const { changeAll } = this.props;
    const estado = { ...this.state };
    delete estado.moedas;
    delete estado.total;
    const resposta = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultado = await resposta.json();
    const bid = resultado[estado.currency];
    const totalValue = parseFloat(estado.value) * bid.ask;
    changeAll({ ...estado, exchangeRates: resultado });
    this.setState((atual) => ({
      id: atual.id + 1,
      total: atual.total + totalValue }));
  }

  render() {
    const { moedas, value, description, total } = this.state;
    const { usuario } = this.props;
    return (
      <>
        <p data-testid="email-field">{usuario}</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <Inputs nome="value" valor={ value } callback={ this.changerValue } />
          <Inputs
            nome="description"
            valor={ description }
            callback={ this.changerValue }
          />
          <label htmlFor="currency">
            Moeda:
            <select id="currency" name="currency" onChange={ this.changerValue }>
              {moedas.map((coin, indice) => (
                coin !== 'USDT'
                && <option key={ `${coin} ${indice}` } value={ coin }>{coin}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select id="method" name="method" onChange={ this.changerValue }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag" onChange={ this.changerValue }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="submit" onClick={ this.gravar }>Adicionar despesas</button>
        </form>
      </>);
  }
}
const mapStateToProps = (state) => ({
  usuario: state.user.email,
  tabela: state.wallet.expenses,
});
const mapDispatchStateToProps = (dispatch) => ({
  changeAll: (valores) => dispatch(gravaConta(valores)),
});

Wallet.propTypes = {
  usuario: PropTypes.string.isRequired,
  changeAll: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchStateToProps)(Wallet);
