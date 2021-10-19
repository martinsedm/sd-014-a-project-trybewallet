import React from 'react';
import PropTypes from 'prop-types';
import FormSelect from './FormSelect';
import { paymentOptions, tagOptions } from '../data';

class WalletForm extends React.Component {
  renderInputs() {
    const { value, description, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            onChange={ handleChange }
            value={ value }
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            onChange={ handleChange }
            value={ description }
            id="description"
          />
        </label>
      </div>
    );
  }

  render() {
    const { currency, method, tag, currencies, handleChange, onSubmit } = this.props;
    return (
      <form>
        { this.renderInputs() }
        <FormSelect
          id="currency"
          infoArray={ currencies }
          onChange={ handleChange }
          label="Moeda"
          value={ currency }
        />
        <FormSelect
          id="method"
          infoArray={ paymentOptions }
          onChange={ handleChange }
          label="Método de pagamento"
          value={ method }
        />
        <FormSelect
          id="tag"
          infoArray={ tagOptions }
          onChange={ handleChange }
          label="Tag"
          value={ tag }
        />
        <button
          type="button"
          onClick={ onSubmit }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default WalletForm;
