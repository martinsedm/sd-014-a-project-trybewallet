import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((results) => (
          this.setState({ moedas: Object.keys(results) })
        )));
  }
  // this.setState({ moedas: Object.keys(results) }

  render() {
    const { moedas } = this.state;
    const { usuario } = this.props;
    return (
      <>
        <p data-testid="email-field">{usuario}</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" name="descricao" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              {moedas.map((moeda) => (
                moeda !== 'USDT'
                && <option value={ moeda }>{moeda}</option>
              ))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>);
  }
}
const mapStateToProps = (state) => ({
  usuario: state.user.email,
});

Wallet.propTypes = {
  usuario: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
