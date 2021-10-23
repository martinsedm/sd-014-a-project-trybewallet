import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses as addExpensesAction, newExpense } from '../actions';
import SelectForm from './SelectForm';

import MethodMapForm from './methodMapForm';
import ButtonAdd from './ButtonAdd';

class FormInputs extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      tag: '',
      currency: [],
      method: '',
      description: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick(event) {
    event.preventDefault();
    const { walletExpenses, addExpenses } = this.props;
    await walletExpenses();
    const { coins } = this.props;

    this.setState({
      exchangeRates: coins,
    });
    await addExpenses(this.state);
  }

  // handleInput({ target: { id, value } }) {
  //   this.setState({ [id]: value });
  // }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            value={ value }
            type="number"
            name="value"
            onChange={ this.handleChange }
            id="valor"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            type="text"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
            id="currency"
          >
            {currencies.map((curr) => (
              <option key={ curr }>
                { curr }
              </option>
            ))}
          </select>
        </label>
        <SelectForm
          tag={ tag }
          onChange={ this.handleChange }
          value={ description }
        />
        <MethodMapForm value={ method } onChange={ this.handleChange } />
        <ButtonAdd onChange={ this.handleClick } />
      </form>
    );
  }
}

FormInputs.propTypes = {
  currencies: PropTypes.arrayOf,
  addExpenses: PropTypes.func.isRequired,
  walletExpenses: PropTypes.func.isRequired,
  coins: PropTypes.objectOf(PropTypes.object).isRequired,
};

FormInputs.defaultProps = {
  currencies: [],
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  coins: state.wallet.coins,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expenses) => dispatch(addExpensesAction(expenses)),
  walletExpenses: () => dispatch(newExpense()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormInputs);
