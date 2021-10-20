import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  renderCurrencyOptions() {
    const { currencies } = this.props;
    return currencies.filter((currency) => currency !== 'USDT')
      .map(((currency) => (
        <option key={ currency } value={ currency }>{currency}</option>
      )));
  }

  renderFieldset() {
    return (
      <fieldset>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            type="text"
            id="descrição"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            type="text"
            id="moeda"
          >
            { this.renderCurrencyOptions() }
          </select>
        </label>
      </fieldset>
    );
  }

  renderOptions() {
    return (
      <fieldset>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            type="text"
            id="pagamento"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            type="text"
            id="tag"
          >
            <option value="alimento">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }

  render() {
    const { email } = this.props;

    return (
      <main>
        <header>
          <h1 data-testid="email-field">{email}</h1>
          <h1 data-testid="total-field">0</h1>
          <h1 data-testid="header-currency-field">BRL</h1>
        </header>
        <form>
          { this.renderFieldset() }
          { this.renderOptions() }
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
