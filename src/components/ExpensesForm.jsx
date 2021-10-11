import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ValueInput from './ValueInput';
import CurrencyInput from './CurrencyInput';
import PaymentInput from './PaymentInput';
import TagInput from './TagInput';
import DescriptionInput from './DescriptionInput';

export default class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '0',
      currency: 'USD',
      method: 'cash',
      tag: 'food',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    return (
      <form className="expenses-form">
        <ValueInput value={ value } onChange={ this.handleChange } />
        <CurrencyInput
          onChange={ this.handleChange }
          currencies={ ['USD', 'CAN', 'BRL'] }
          value={ currency }
        />
        <PaymentInput value={ method } onChange={ this.handleChange } />

        <TagInput value={ tag } onChange={ this.handleChange } />

        <DescriptionInput value={ description } onChange={ this.handleChange } />

        <button
          type="button"
          className="btn btn-primary"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}
