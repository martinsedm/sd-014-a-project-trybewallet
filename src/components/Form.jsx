import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import SelectForm from './SelectForm';

class Form extends Component {
  render() {
    const {
      content,
      currencies,
      categories,
      payment,
      textButton,
      onChange,
      onClick,
    } = this.props;
    const { value, description, currency, method, tag } = content;
    return (
      <form
        name="expenseForm"
        id="expense-form"
        onSubmit={ (e) => {
          e.preventDefault();
          onClick();
        } }
      >
        <fieldset>
          <legend>
            Sua despesa
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
          <button type="submit">
            { textButton }
          </button>
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  content: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  payment: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  textButton: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Form;
