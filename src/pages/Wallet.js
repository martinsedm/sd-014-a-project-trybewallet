import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { currencyAPIThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencyAPI } = this.props;
    fetchCurrencyAPI();
  }

  render() {
    const { payload } = this.props;
    const { wallet } = payload;
    const { currencies, isFetching } = wallet;
    return (
      <div>
        <Header />
        TrybeWallet
        <form>
          <label htmlFor="expenses">
            Valor
            <input type="text" id="expenses" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {!isFetching
            && currencies
              .map((currency) => <option key={ currency.code }>{currency.code}</option>)}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="food-expenses">Alimentação</option>
              <option value="recreation-expenses">Lazer</option>
              <option value="job-expenses">Trabalho</option>
              <option value="transport-expenses">Transporte</option>
              <option value="healthcare-expenses">Saúde</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCurrencyAPI: PropTypes.func,
  payload: PropTypes.shape({
    wallet: PropTypes.shape({
      currencies: PropTypes.shape({
        map: PropTypes.func,
      }).isRequired,
      isFetching: PropTypes.bool,
    }).isRequired,
  }).isRequired,
}.isRequired;

const mapStateToProps = (state) => ({
  payload: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyAPI: () => dispatch(currencyAPIThunk()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
