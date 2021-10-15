import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import SelectForm from './SelectForm';

class Form extends Component {
  render() {
    const {
      value,
      description,
      currency,
      pay,
      category,
      currencies,
      categories,
      payment,
      callback,
    } = this.props;
    return (
      <form name="expenseForm" id="expense-form">
        <fieldset>
          <legend>
            Cadastre uma despesa
          </legend>
          <InputForm
            data={ ['Valor', 'value', value, 'number', callback] }
          />
          <InputForm
            data={ ['Descrição', 'description', description, 'text', callback] }
          />
          <SelectForm
            data={ ['Moeda', 'currency', currency, currencies, callback] }
          />
          <SelectForm
            data={ ['Método de pagamento', 'pay', pay, payment, callback] }
          />
          <SelectForm
            data={ ['Tag', 'category', category, categories, callback] }
          />
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  pay: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  payment: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  callback: PropTypes.func.isRequired,
};

export default Form;
