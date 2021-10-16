import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormSelect from '../components/FormSelect';
import { paymentOptions, tagOptions } from '../data';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'Dólar',
      payment: 'dinheiro',
      tag: 'alimentação',
      currencies: [],
      // expenses: [],
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.fetchCurrencyAPI = this.fetchCurrencyAPI.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencyAPI();
  }

  async fetchCurrencyAPI() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const currencies = await (await fetch(URL)).json();

    // stack overflow
    delete currencies.USDT;

    this.setState({
      currencies: Object.keys(currencies),
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field"> 0 </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  renderForm() {
    const { value, description, currency, payment, tag, currencies } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="text"
            onChange={ this.handleChange }
            value={ value }
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            onChange={ this.handleChange }
            value={ description }
            id="description"
          />
        </label>
        <FormSelect
          id="currency"
          infoArray={ currencies }
          onChange={ this.handleChange }
          label="Moeda"
          value={ currency }
        />
        <FormSelect
          id="payment"
          infoArray={ paymentOptions }
          onChange={ this.handleChange }
          label="Método de pagamento"
          value={ payment }
        />
        <FormSelect
          id="tag"
          infoArray={ tagOptions }
          onChange={ this.handleChange }
          label="Tag"
          value={ tag }
        />
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        { this.renderForm() }
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

// const mapDispatchToProps = (dispatch) => ({
//   currencies: (payload) => dispatch(GET_CURRENCIES_FROM_API(payload))
// });

export default connect(mapStateToProps)(Wallet);
