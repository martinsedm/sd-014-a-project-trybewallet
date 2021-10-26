import React, { Component } from 'react';
import { connect } from 'react-redux';
import { paymentMethod, tags } from '../data';
import InputForm from './InputForm';
import SelectForm from './SelectForm';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      describe: '',
      currency: 'BRL',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  createPaymentOptions() {
    return paymentMethod.map((method) => (
      <option value={ method } key={ method }>{ method }</option>
    ));
  }

  createtagOptions() {
    return tags.map((tag) => (
      <option value={ tag } key={ tag }>{ tag }</option>
    ));
  }

  render() {
    const { value, describe, currency, payment, tag } = this.state;
    return (
      <form>
        <InputForm name="value" value={ value } change={ this.handleChange } />
        <InputForm name="describe" value={ describe } change={ this.handleChange } />
        <SelectForm
          name="currency"
          value={ currency }
          type="Moeda"
          change={ this.handleChange }
          options={ [currency] }
        />
        <SelectForm
          name="payment"
          value={ payment }
          type="Método de pagamento"
          change={ this.handleChange }
          options={ paymentMethod }
        />
        <SelectForm
          name="tag"
          value={ tag }
          type="tag"
          change={ this.handleChange }
          options={ tags }
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

export default connect(mapStateToProps)(ExpensesForm);
