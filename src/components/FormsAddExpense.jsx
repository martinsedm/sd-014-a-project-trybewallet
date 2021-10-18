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
  }

  handleChangeGeneric({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const MethodsPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagsExpense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value: price, currency, method: paymentForm, tag, description } = this.state;
    const { currencies } = this.props;
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
          options={ formatObjCurrencies(currencies[0], 'USDT') }
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
        <Button onClick={ this.handleonCLick } text="Adicionar despesa" />
      </form>
    );
  }
}

FormsAddexpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormsAddexpense;
