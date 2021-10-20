import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expensesAction, fetchExchangeRates } from '../../actions';
import ExpenseTable from '../table/ExpenseTable';
import FormEditExpense from './FormEditExpense';
import Imputs from './imputs/Imputs';
import Selects from './selects/Selects';

class FormExpense extends Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { getExchangeRates } = this.props;
    await getExchangeRates();

    const { expenses, exchangeRates } = this.props;
    const { id } = this.state;

    this.setState({
      exchangeRates,
      id: id + 1,
    });

    expenses(this.state);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { edit } = this.props;
    if (edit === true) return <FormEditExpense />;
    return (
      <form className="row row-cols-lg-auto g-3 align-items-center">
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
          style={ { marginTop: '56px' } }
          className="btn btn-primary"
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
        <ExpenseTable />
      </form>
    );
  }
}

FormExpense.propTypes = {
  edit: PropTypes.bool.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  expenses: PropTypes.func.isRequired,
  getExchangeRates: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  exchangeRates: state.wallet.coins,
  edit: state.wallet.edit,
});

const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: () => dispatch(fetchExchangeRates()),
  expenses: (state) => dispatch(expensesAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
