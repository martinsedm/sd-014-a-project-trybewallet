import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { metodosPagamentos, tags } from '../services/metodosPagamentos&Tags';
import { fetchCurrencies, addExpenses } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { loadingCurrencies } = this.props;
    loadingCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  async handleClick(event) {
    const { value, description, currency, method, tag } = this.state;
    const { getExpense } = this.props;
    event.preventDefault();

    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await data.json();

    const expenses = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: json,

    };

    getExpense(expenses);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Input
          label="Valor:"
          name="value"
          id="value"
          type="text"
          onChange={ this.handleChange }
          value={ value }
        />

        <Input
          label="Descrição:"
          name="description"
          id="description"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />

        <Select
          label="Moeda:"
          name="currency"
          id="currency"
          options={ currencies }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento:"
          id="method"
          options={ metodosPagamentos }
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag:"
          id="tag"
          options={ tags }
          value={ tag }
          onChange={ this.handleChange }
        />
        <button type="submit" onClick={ this.handleClick }> Adicionar despesa </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadingCurrencies: PropTypes.func.isRequired,
  getExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => (
  {
    loadingCurrencies: () => dispatch(fetchCurrencies()),
    getExpense: (expense) => dispatch(addExpenses(expense)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
