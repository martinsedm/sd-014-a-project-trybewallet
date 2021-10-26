import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormSelect from './FormSelect';
import { setExpense } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.generateMethods = this.generateMethodsOptions.bind(this);
    this.generateTags = this.generateTagOptions.bind(this);
    this.generateCurrencies = this.generateCurrencyOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  async getCurrencies() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    return currencies;
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  generateMethodsOptions() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return methods.map((method, index) => (
      <option key={ index } value={ method }>{method}</option>
    ));
  }

  generateTagOptions() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return tags.map((tag, index) => (
      <option key={ index } value={ tag }>{tag}</option>
    ));
  }

  generateCurrencyOptions() {
    const { currencies } = this.props;
    return currencies.map((currency, index) => (
      <option key={ index } value={ currency }>{currency}</option>
    ));
  }

  async handleClick() {
    const { value, description, currency, method, tag } = this.state;
    const { addExpense } = this.props;
    const currencies = await this.getCurrencies();
    const expense = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    addExpense(expense);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form
        className="d-flex justify-content-around align-items-center pt-2 pb-2"
        style={ { backgroundColor: '#E8505B' } }
      >
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            className="form-control"
            onChange={ this.handleChange }
            value={ value }
            id="value"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            className="form-control"
            onChange={ this.handleChange }
            value={ description }
            id="description"
            name="description"
          />
        </label>
        <FormSelect
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          title="Moeda:"
          options={ this.generateCurrencies() }
        />
        <FormSelect
          id="method"
          value={ method }
          onChange={ this.handleChange }
          title="Método de Pagamento:"
          options={ this.generateMethods() }
        />
        <FormSelect
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
          title="Tag:"
          options={ this.generateTags() }
        />
        <button
          type="button"
          onClick={ this.handleClick }
          className="btn btn-dark p-3"
        >
          Adicionar Despesa

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
  addExpense: (expense) => dispatch(setExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
