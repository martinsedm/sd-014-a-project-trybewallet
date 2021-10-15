import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import { methodList, expenseCatList } from '../services/index';

export default class ExpensesForm extends React.Component {
  render() {
    const {
      value,
      description,
      currencyList,
      handleInput,
      handleButton,
    } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            value={ value }
            onChange={ handleInput }
          />
        </label>
        <SelectInput
          lblName="Moeda"
          name="currency"
          defaultValue={ currencyList[0] }
          optionsList={ currencyList }
          cb={ handleInput }
        />
        <SelectInput
          lblName="Método de pagamento"
          name="method"
          defaultValue={ methodList[0] }
          optionsList={ methodList }
          cb={ handleInput }
        />
        <SelectInput
          lblName="Tag"
          name="tag"
          defaultValue={ expenseCatList[0] }
          optionsList={ expenseCatList }
          cb={ handleInput }
        />
        <TextInput
          name="description"
          value={ description }
          lblName="Descrição"
          cb={ handleInput }
        />
        <button type="button" onClick={ handleButton }>Adicionar despesa</button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.any).isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
