import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { paymentMethod, tags } from '../data';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import { fetchAPI, addExpense as addExpenseAction } from '../actions';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { addExpense, expenses, getCurrencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    await getCurrencies();
    const { currencies } = this.props;
    const newExpense = {
      id: expenses.length,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: currencies,
    };
    addExpense(newExpense);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <InputForm
          name="value"
          value={ value }
          change={ this.handleChange }
        />
        <InputForm
          name="description"
          value={ description }
          change={ this.handleChange }
        />
        <SelectForm
          name="currency"
          value={ currency }
          type="Moeda"
          change={ this.handleChange }
          options={ Object.keys(currencies) }
        />
        <SelectForm
          name="method"
          value={ method }
          type="Método de pagamento"
          change={ this.handleChange }
          options={ paymentMethod }
        />
        <SelectForm
          name="tag"
          value={ tag }
          type="tag"
          change={ this.handleChange }
          options={ tags }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ])).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
