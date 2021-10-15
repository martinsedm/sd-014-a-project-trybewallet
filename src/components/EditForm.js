import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { updateExpenses, editExpenses } from '../actions';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import { methodList, expenseCatList } from '../services/index';

class EditForm extends React.Component {
  submitEditButton = (handleButton) => (
    <button
      type="button"
      onClick={ handleButton }
      data-testid="edit-btn"
    >
      Editar despesa

    </button>
  )

  render() {
    const { currencyList, expense, handleInput, handleButton } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            value={ expense.value }
            onChange={ handleInput }
          />
        </label>
        <SelectInput
          lblName="Moeda"
          name="currency"
          optionsList={ currencyList }
          defaultValue={ expense.currency }
          cb={ handleInput }
        />
        <SelectInput
          lblName="Método de pagamento"
          name="method"
          optionsList={ methodList }
          defaultValue={ expense.method }
          cb={ handleInput }
        />
        <SelectInput
          lblName="Tag"
          name="tag"
          optionsList={ expenseCatList }
          defaultValue={ expense.tag }
          cb={ handleInput }
        />
        <TextInput
          name="description"
          value={ expense.description }
          lblName="Descrição"
          cb={ handleInput }
        />
        {this.submitEditButton(handleButton)}
      </form>
    );
  }
}

EditForm.propTypes = {
  currencyList: PropTypes.arrayOf(PropTypes.any).isRequired,
  expense: PropTypes.objectOf(PropTypes.any).isRequired,
  handleInput: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenseList: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(mapStateToProps, null)(EditForm);
