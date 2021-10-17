import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, addExpense } from '../actions';

import Value from './Value';
import Description from './Description';
import Currency from './Currency';
import Method from './Method';
import Tag from './Tag';

class ExpensesForm extends React.Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  componentDidMount() {
    const { setFetchCurrencies } = this.props;
    setFetchCurrencies();
  }

  async getCurrencies() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    return currencies;
  }

  handleChange({ target: { name, value } }) {
    this.setState(
      { [name]: value },
    );
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { setExpense } = this.props;

    const exchangeRates = await this.getCurrencies();
    const expense = { ...this.state, exchangeRates };
    setExpense(expense);

    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { value, description } = this.state;

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <Value value={ value } onChange={ this.handleChange } />
          <Description value={ description } onChange={ this.handleChange } />
          <Currency onChange={ this.handleChange } />
          <Method onChange={ this.handleChange } />
          <Tag onChange={ this.handleChange } />

          <button type="submit">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchCurrencies: () => dispatch(fetchCurrencies()),
  setExpense: (expense) => dispatch(addExpense(expense)),
});

ExpensesForm.propTypes = {
  setFetchCurrencies: PropTypes.func.isRequired,
  setExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
