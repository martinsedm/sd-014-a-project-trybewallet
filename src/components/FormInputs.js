import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../actions';
import SelectForm from './SelectForm';

import MethodMapForm from './methodMapForm';
import ButtonAdd from './ButtonAdd';

class FormInputs extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      tag: '',
      currency: '',
      method: '',
      description: '',
      exchangeRates: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { addExpenses } = this.props;
    addExpenses(this.state);
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { stateMoeda } = this.props;
    const arrayMoeda = Object.keys(stateMoeda);
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            value={ value }
            type="number"
            name="valor"
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
            {arrayMoeda.map((state) => (
              <option key={ state }>
                { stateMoeda }
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
        <SelectForm
          value={ tag }
          onChange={ this.handleChange }
        />
        <ButtonAdd onChage={ this.handleClick } />
      </form>
    );
  }
}

FormInputs.propTypes = {
  stateMoeda: PropTypes.arrayOf.isRequired,
  addExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stateMoeda: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormInputs);
