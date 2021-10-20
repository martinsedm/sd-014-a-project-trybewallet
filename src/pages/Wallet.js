import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCoins from '../services/api';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: {},
    };
    this.handleCoins = this.handleCoins.bind(this);
  }

  componentDidMount() {
    this.handleCoins();
  }

  handleCoins() {
    getCoins().then((response) => {
      this.setState({ coins: response });
    });
  }

  render() {
    const { userEmail } = this.props;
    const { coins } = this.state;
    return (
      <div>
        <h1 data-testid="email-field">{ userEmail }</h1>
        <form>
          <label htmlFor="despesa">
            Valor
            <input type="text" id="despesa" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" id="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="moeda">
              { Object.keys(coins).map((coin) => <option key={ coin }>{ coin }</option>) }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento" name="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag
            <select id="Tag" name="Tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <h2 data-testid="total-field">0</h2>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
