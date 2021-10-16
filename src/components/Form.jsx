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
      method,
      tag,
      currencies,
      categories,
      payment,
      textButton,
      onChange,
      onClick,
    } = this.props;
    return (
      <form name="expenseForm" id="expense-form">
        <fieldset>
          <legend>
            Cadastre uma despesa
          </legend>
          <InputForm
            data={ ['Valor', 'value', value, 'number', onChange] }
          />
          <InputForm
            data={ ['Descrição', 'description', description, 'text', onChange] }
          />
          <SelectForm
            data={ ['Moeda', 'currency', currency, currencies, onChange] }
          />
          <SelectForm
            data={ ['Método de pagamento', 'method', method, payment, onChange] }
          />
          <SelectForm
            data={ ['Tag', 'tag', tag, categories, onChange] }
          />
          <button
            type="button"
            onClick={ onClick }
          >
            { textButton }
          </button>
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
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  payment: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  textButton: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Form;
