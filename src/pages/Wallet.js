import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gravaConta } from '../actions';
import Inputs from '../Components/Inputs';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
      valor: '',
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: '',
    };
    this.changerValue = this.changerValue.bind(this);
    this.gravar = this.gravar.bind(this);
  }

  componentDidMount() {
    this.fetchMoney();
  }

  fetchMoney() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((results) => (
          this.setState({ moedas: Object.keys(results) })
        )));
  }

  changerValue(event) {
    const valor = event.target.value;
    this.setState({ [event.target.id]: valor });
  }

  gravar(event) {
    const { changeAll } = this.props;
    event.preventDefault();
    const estado = { ...this.state };
    delete estado.moedas;
    changeAll(estado);
    this.fetchMoney();
  }

  render() {
    const { moedas, valor, descricao } = this.state;
    const { usuario } = this.props;
    return (
      <>
        <p data-testid="email-field">{usuario}</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <Inputs nome="valor" valor={ valor } callback={ this.changerValue } />
          <Inputs nome="descricao" valor={ descricao } callback={ this.changerValue } />
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda" onChange={ this.changerValue }>
              {moedas.map((coin) => (
                coin !== 'USDT'
                && <option value={ coin }>{coin}</option>
              ))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento" onChange={ this.changerValue }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" onChange={ this.changerValue }>
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
});
const mapDispatchStateToProps = (dispatch) => ({
  changeAll: (valores) => dispatch(gravaConta(valores)),
});

Wallet.propTypes = {
  usuario: PropTypes.string.isRequired,
  changeAll: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchStateToProps)(Wallet);
