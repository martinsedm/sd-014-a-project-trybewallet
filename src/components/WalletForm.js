import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addExpense, fetchCurrencies, updateExpense } from '../actions';
import WalletSelect from './WalletSelect';
import WalletInput from './WalletInput';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = this.initialState();
    this.handleChange = this.handleChange.bind(this);
    this.submitExpense = this.submitExpense.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  componentDidUpdate(prevProps) {
    const { editingExpenseId } = this.props;
    if (prevProps.editingExpenseId !== editingExpenseId) {
      this.toggleEditMode(editingExpenseId);
    }
  }

  toggleEditMode(expenseId) {
    if (expenseId === null) {
      this.setState(this.initialState());
    } else {
      const { expenses } = this.props;
      const expenseToEdit = expenses.find(({ id }) => id === expenseId);
      this.setState(expenseToEdit);
    }
  }

  initialState() {
    return {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: null,
      exchangeRates: null,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  submitExpense(event) {
    event.preventDefault();
    const { editingExpenseId, setNewExpense, setUpdateExpense } = this.props;
    if (editingExpenseId === null) {
      setNewExpense(this.state);
      this.setState(this.initialState());
    } else {
      setUpdateExpense(this.state);
    }
  }

  render() {
    const { currencies, editingExpenseId } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form onSubmit={ this.submitExpense }>
        <WalletInput
          name="value"
          type="number"
          step=".01"
          labelText="Valor"
          value={ value }
          onChange={ this.handleChange }
        />
        <WalletSelect
          name="currency"
          labelText="Moeda"
          options={ currencies.filter((curr) => curr !== 'USDT') }
          value={ currency }
          onChange={ this.handleChange }
        />
        <WalletSelect
          name="method"
          labelText="Método de pagamento"
          options={ methods }
          value={ method }
          onChange={ this.handleChange }
        />
        <WalletSelect
          name="tag"
          labelText="Tag"
          options={ tags }
          value={ tag }
          onChange={ this.handleChange }
        />
        <WalletInput
          name="description"
          labelText="Descrição"
          value={ description }
          onChange={ this.handleChange }
        />
        <input
          type="submit"
          value={ editingExpenseId === null ? 'Adicionar despesa' : 'Editar despesa' }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editingExpenseId: state.wallet.editingExpenseId,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrencies()),
  setNewExpense: (expense) => dispatch(addExpense(expense)),
  setUpdateExpense: (expense) => dispatch(updateExpense(expense)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  editingExpenseId: PropTypes.number,
  setCurrencies: PropTypes.func.isRequired,
  setNewExpense: PropTypes.func.isRequired,
  setUpdateExpense: PropTypes.func.isRequired,
};

WalletForm.defaultProps = {
  editingExpenseId: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
