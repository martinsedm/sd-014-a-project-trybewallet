import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
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
            <select aria-label="moeda" id="coins" />
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
const mapStateToProps = ({ user }) => ({
  email: user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
