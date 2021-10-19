import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { attExpensesAction } from '../../actions';
import ExpenseTable from '../table/ExpenseTable';
import Imputs from './imputs/Imputs';
import Selects from './selects/Selects';

class FormEditExpense extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.handleEdit();
  }

  handleEdit() {
    const { expensesEdit, id } = this.props;
    const attState = expensesEdit.find((expense) => expense.id === Number(id));
    const { value, description, currency, method, tag, exchangeRates } = attState;
    this.setState({
      id: Number(id),
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { expenses } = this.props;
    const { expensesEdit, id } = this.props;
    const attStateGlobal = expensesEdit.filter((expense) => expense.id !== Number(id));
    attStateGlobal.push(this.state);
    expenses(attStateGlobal.sort((a, b) => a.id - b.id));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Imputs
          value={ value }
          description={ description }
          handleChange={ this.handleChange }
        />
        <Selects
          currency={ currency }
          method={ method }
          tag={ tag }
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Editar despesa
        </button>
        <ExpenseTable />
      </form>
    );
  }
}

FormEditExpense.propTypes = {
  expenses: PropTypes.func.isRequired,
  expensesEdit: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  // exchangeRates: state.wallet.coins,
  expensesEdit: state.wallet.expenses,
  id: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (state) => dispatch(attExpensesAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormEditExpense);
