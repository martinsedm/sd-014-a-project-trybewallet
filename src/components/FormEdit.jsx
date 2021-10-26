import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormSelect from './FormSelect';
import { editExpense, setEditCondition } from '../actions';
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props);
    const { id,
      value, description, currency, method, tag, exchangeRates } = props.expense;
    this.state = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    this.generateMethods = this.generateMethodsOptions.bind(this);
    this.generateTags = this.generateTagOptions.bind(this);
    this.generateCurrencies = this.generateCurrencyOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  generateMethodsOptions() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return methods.map((method, index) => (
      <option key={ index } value={ method }>{method}</option>
    ));
  }

  generateTagOptions() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return tags.map((tag, index) => (
      <option key={ index } value={ tag }>{tag}</option>
    ));
  }

  generateCurrencyOptions() {
    const { currencies } = this.props;
    return currencies.map((currency, index) => (
      <option key={ index } value={ currency }>{currency}</option>
    ));
  }

  async handleClick() {
    const { id, value, description, currency, method, tag, exchangeRates } = this.state;
    const { handleExpense, editCondition } = this.props;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    handleExpense(expense);
    editCondition(false);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form
        className="d-flex justify-content-around align-items-center pt-2 pb-2"
        style={ { backgroundColor: '#E8505B' } }
      >
        <Input
          id="value"
          value={ value }
          onChange={ this.handleChange }
          title="Valor:"
        />
        <Input
          id="description"
          value={ description }
          onChange={ this.handleChange }
          title="Descrição:"
        />
        <FormSelect
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          title="Moeda:"
          options={ this.generateCurrencies() }
        />
        <FormSelect
          id="method"
          value={ method }
          onChange={ this.handleChange }
          title="Método de Pagamento:"
          options={ this.generateMethods() }
        />
        <FormSelect
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
          title="Tag:"
          options={ this.generateTags() }
        />
        <button
          type="button"
          className="btn btn-primary p-3"
          data-testid="edit-btn"
          onClick={ this.handleClick }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleExpense: PropTypes.func.isRequired,
  editCondition: PropTypes.func.isRequired,
  expense: PropTypes.object.isRequired,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  handleExpense: (expense) => dispatch(editExpense(expense)),
  editCondition: (condition) => dispatch(setEditCondition(condition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
