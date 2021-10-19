import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoin } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.getCurrency = this.getCurrency.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  getCurrency() {
    const { fetchOptions } = this.props;
    fetchOptions();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <fieldset>
          <legend>Wallet</legend>
          <label htmlFor="amount">
            Valor:
            <input id="amount" type="text" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" />
          </label>
          <label htmlFor="coins">
            Moeda:
            <select aria-label="moeda" id="coins">
              {Object.keys(currencies)
                .map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento:
            <select aria-label="método de pagamento" id="payment-method">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartão de crédito">Cartão de crédito</option>
              <option value="cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </fieldset>
      </>
    );
  }
}

// Pega da store o email para mostrar no header;
const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOptions: () => dispatch(getCoin()),
});

Wallet.propTypes = {
  email: PropTypes.string,
  fetchOptions: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
