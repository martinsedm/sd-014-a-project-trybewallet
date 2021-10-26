import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getThunk, getExpensesThunk } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleExpenses = this.handleExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.paymentMethods = this.paymentMethods.bind(this);
    this.categoryTypes = this.categoryTypes.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  async handleExpenses() {
    const { value, description, currency, method, tag } = this.state;
    const { newExpense } = this.props;
    await newExpense({ value, description, currency, method, tag });
  }

  paymentMethods() {
    const arrayMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return arrayMethods.map((method, index) => (
      <option value={ method } key={ index }>{ method }</option>
    ));
  }

  categoryTypes() {
    const arrayCategories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return arrayCategories.map((category, index) => (
      <option value={ category } key={ index }>{ category }</option>
    ));
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            onChange={ this.handleChange }
          >
            { currencies.map((currency, index) => (
              <option key={ index } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select
            id="method"
            onChange={ this.handleChange }
          >
            { this.paymentMethods() }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            onChange={ this.handleChange }
          >
            { this.categoryTypes() }
          </select>
        </label>
        <button type="button" onClick={ this.handleExpenses }>Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });
const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getThunk()),
  newExpense: ({ value, description, currency, method, tag }) => (
    dispatch(getExpensesThunk({ value, description, currency, method, tag }))
  ),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  newExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
