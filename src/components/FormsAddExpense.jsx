import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatObjCurrencies } from '../service/requestAPIs';

import Input from './Input';
import Select from './Select';
import { Button } from './Button';

class FormsAddexpense extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChangeGeneric = this.handleChangeGeneric.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleChangeGeneric({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleCLick() {
    const { updateCurrencies, getCurrencies, getExpenses, addExpense } = this.props;
    await updateCurrencies();
    const indexExpense = getExpenses.length; // possivel bug quando for remover um item
    const expense = {
      id: indexExpense,
      ...this.state,
      exchangeRates: getCurrencies[0],
    };
    addExpense(expense);
  }

  render() {
    const MethodsPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagsExpense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value: price, currency, method: paymentForm, tag, description } = this.state;
    const { getCurrencies } = this.props;
    return (
      <form>
        <Input
          type="number"
          onChange={ this.handleChangeGeneric }
          id="value"
          name="value"
          value={ price }
          TextLabel="Valor"
        />
        <Select
          value={ currency }
          options={ formatObjCurrencies(getCurrencies[0]) }
          name="currency"
          textLabel="Moeda"
          onChange={ this.handleChangeGeneric }
        />
        <Select
          value={ paymentForm }
          name="method"
          textLabel="Método de pagamento"
          onChange={ this.handleChangeGeneric }
          options={ MethodsPayment }
        />
        <Select
          value={ tag }
          name="tag"
          options={ tagsExpense }
          textLabel="Tag"
          onChange={ this.handleChangeGeneric }
        />
        <Input
          type="text"
          id="description"
          value={ description }
          name="description"
          onChange={ this.handleChangeGeneric }
          TextLabel="Descrição"
        />
        <Button onClick={ this.handleCLick } text="Adicionar despesa" />
      </form>
    );
  }
}

FormsAddexpense.propTypes = {
  getCurrencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCurrencies: PropTypes.func.isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default FormsAddexpense;
