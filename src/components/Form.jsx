import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, setExpenses } from '../actions';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.paymentMethods = this.paymentMethods.bind(this);
    this.categoriesTags = this.categoriesTags.bind(this);
    this.mapCurrencies = this.mapCurrencies.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async getCurrenciesJson() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    await delete currencies.USDT;
    return currencies;
  }

  async handleClick() {
    const { pushExpenses } = this.props;
    const currencies = await this.getCurrenciesJson();
    this.setState({ exchangeRates: currencies },
      () => pushExpenses(this.state));
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  mapCurrencies() {
    const { currencies } = this.props;
    return currencies.map((currency, index) => (
      <option value={ currency } key={ index }>{currency}</option>
    ));
  }

  paymentMethods() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return methods.map((method, index) => (
      <option value={ method } key={ index }>{method}</option>
    ));
  }

  categoriesTags() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return tags.map((tag, index) => (
      <option value={ tag } key={ index }>{ tag }</option>
    ));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Input
          id="value"
          value={ value }
          type="text"
          onChange={ this.handleChange }
          textlabel="Valor"
        />
        <Input
          id="description"
          value={ description }
          type="text"
          onChange={ this.handleChange }
          textlabel="Descrição"
        />
        <Select
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          options={ this.mapCurrencies }
          textlabel="Moeda"
        />
        <Select
          id="method"
          value={ method }
          onChange={ this.handleChange }
          options={ this.paymentMethods }
          textlabel="Método de pagamento"
        />
        <Select
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
          options={ this.categoriesTags }
          textlabel="Tag"
        />
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  pushExpenses: (state) => dispatch(setExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
