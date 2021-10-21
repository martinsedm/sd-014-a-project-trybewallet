import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { currencyAPIThunk, walletAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.currencySelectFetch = this.currencySelectFetch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencyAPI } = this.props;
    fetchCurrencyAPI();
  }

  // como aprendi a incrementar o state
  // https://dirask.com/posts/React-increment-state-value-class-component-DLoa61
  onSubmitForm() {
    const { formValues } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    formValues(this.state);
  }

  handleInputChange(event) {
    const { value } = event.target;
    this.setState({ [event.target.name]: value });
    const { payload } = this.props;
    const { wallet } = payload;
    const { currencies } = wallet;
    currencies
      .filter((exchange) => exchange.code === value)
      .map(({ code, name, ask }) => (
        this.setState({ exchangeRates: { [code]: {
          [code]: code,
          name,
          ask,
        } } })
      ));
  }

  currencySelectFetch() {
    const { payload } = this.props;
    const { wallet } = payload;
    const { currencies, isFetching } = wallet;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" name="currency" onChange={ this.handleInputChange }>
          {!isFetching
            && currencies
              .map((currency) => <option key={ currency.code }>{currency.code}</option>)}
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="expenses">
            Valor
            <input
              type="text"
              name="value"
              id="expenses"
              onChange={ this.handleInputChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              onChange={ this.handleInputChange }
            />
          </label>
          {this.currencySelectFetch()}
          <label htmlFor="payment">
            Método de pagamento
            <select name="method" id="payment" onChange={ this.handleInputChange }>
              <option name="cash">Dinheiro</option>
              <option name="credit">Cartão de crédito</option>
              <option name="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag" onChange={ this.handleInputChange }>
              <option name="food-expenses">Alimentação</option>
              <option name="recreation-expenses">Lazer</option>
              <option name="job-expenses">Trabalho</option>
              <option name="transport-expenses">Transporte</option>
              <option name="healthcare-expenses">Saúde</option>
            </select>
          </label>
          <button onClick={ this.onSubmitForm } type="button">Adicionar despesa</button>
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
  payload: state,
});

const mapDispatchToProps = (dispatch) => ({
  formValues: (state) => dispatch(walletAction(state)),
  fetchCurrencyAPI: () => dispatch(currencyAPIThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
