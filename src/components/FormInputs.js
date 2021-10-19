import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../actions';
import ExpenseMap from './ExpenseMap';
import fetchApi from './FetchApi';
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

  componentDidMount() {
    fetchApi().then((extrangeRates) => this.setState({ extrangeRates }));
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
    const spendings = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value, currency, method, tag, description, exchangeRates } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" value={ value } />
        </label>
        <ExpenseMap
          currency={ currency }
          exchangeRates={ exchangeRates }
          handleChange={ this.handleChange }
        />
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            value={ description }
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <MethodMapForm value={ method } onChange={ this.handleChange } />
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            {spendings.map((spending) => (
              <option key={ spending } value={ spending }>{spending}</option>))}
          </select>
        </label>
        <ButtonAdd onChage={ this.handleClick } />
      </form>
    );
  }
}

FormInputs.propTypes = {
  addExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(FormInputs);
