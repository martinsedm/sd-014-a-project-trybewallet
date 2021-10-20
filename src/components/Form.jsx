import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchAPI, addExpenseThunk } from '../actions';

import Input from './Input';
import Select from './Select';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { apiCall } = this.props;
    apiCall();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpense } = this.props;
    addExpense(this.state);
  }

  handleSubmit() {
    return (
      <button type="button" onClick={ this.handleClick }>
        Adicionar despesa
      </button>
    );
  }

  renderOptions() {
    const { currencies } = this.props;
    return currencies
      .filter((currency) => currency !== 'USDT')
      .map((currency, index) => (
        <option key={ index } value={ currency }>
          {currency}
        </option>
      ));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Input
          htmlFor="value"
          label="Valor:"
          type="text"
          onChange={ this.handleChange }
          value={ value }
        />
        <Input
          htmlFor="description"
          label="Descrição:"
          type="text"
          onChange={ this.handleChange }
          value={ description }
        />
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {this.renderOptions()}
          </select>
        </label>
        <Select
          htmlFor="method"
          label="Método de pagamento:"
          onChange={ this.handleChange }
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          value={ method }
        />
        <Select
          htmlFor="tag"
          label="Tag:"
          onChange={ this.handleChange }
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          value={ tag }
        />
        <p>{this.handleSubmit()}</p>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  apiCall: () => dispatch(fetchAPI()),
  addExpense: (expense) => dispatch(addExpenseThunk(expense)),
});

Form.propTypes = {
  apiCall: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
