import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormInput from './FormInput';
import FormSelect from './FormSelect';

import {
  addExpense as addExpenseAction,
  editExpense as editExpenseAction,
  fetchCurrencies as fetchCurrenciesAction,
} from '../actions';
import fetchApi from '../services/api';

const INITIAL_STATE = {
  currency: 'USD',
  description: '',
  exchangeRates: {},
  method: 'Dinheiro',
  tag: 'Alimentação',
  value: '',
};

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  componentDidUpdate(nextProps) {
    const { editId, expenses, isEditing } = this.props;

    // (isEditing !== nextProps.isEditing) is used to prevent looping when editing
    if (isEditing && isEditing !== nextProps.isEditing) {
      const { currency, description, method, tag, value } = expenses[editId];
      this.updateState({ currency, description, method, tag, value });
    }
  }

  updateState(newState) {
    this.setState(newState);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { addExpense } = this.props;
    const exchangeRates = await fetchApi();

    this.setState({ exchangeRates });
    addExpense(this.state);

    this.setState(INITIAL_STATE);
  }

  isDisabled() {
    const { currency, description, method, tag, value } = this.state;
    return !(currency && description && method && tag && value);
  }

  handleEditExpense(expense) {
    const { editExpense } = this.props;

    editExpense(expense);
    this.setState(INITIAL_STATE);
  }

  renderButton() {
    const { editId: id, isEditing } = this.props;
    const { currency, description, method, tag, value } = this.state;
    const expense = { currency, description, id, method, tag, value };

    return isEditing ? (
      <button onClick={ () => this.handleEditExpense(expense) } type="button">
        Editar despesa
      </button>
    ) : (
      <button
        disabled={ this.isDisabled() }
        onClick={ this.handleClick }
        type="button"
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { currencies } = this.props;
    const { currency, description, method, tag, value } = this.state;
    return (
      <div>
        <form>
          <FormInput
            label="Valor"
            name="value"
            onChange={ this.handleChange }
            value={ value }
          />
          <FormInput
            label="Descrição"
            name="description"
            onChange={ this.handleChange }
            value={ description }
          />
          <FormSelect
            label="Moeda"
            name="currency"
            onChange={ this.handleChange }
            options={ currencies }
            value={ currency }
          />
          <FormSelect
            label="Método de pagamento"
            name="method"
            onChange={ this.handleChange }
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            value={ method }
          />
          <FormSelect
            label="Tag"
            name="tag"
            onChange={ this.handleChange }
            options={ [
              'Alimentação',
              'Lazer',
              'Trabalho',
              'Transporte',
              'Saúde',
            ] }
            value={ tag }
          />
          {this.renderButton()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editId: state.wallet.editId,
  expenses: state.wallet.expenses,
  isEditing: state.wallet.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
  editExpense: (expense) => dispatch(editExpenseAction(expense)),
  fetchCurrencies: () => dispatch(fetchCurrenciesAction()),
});

AddExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editExpense: PropTypes.func.isRequired,
  editId: PropTypes.number,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};

AddExpenseForm.defaultProps = {
  editId: null,
  isEditing: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
