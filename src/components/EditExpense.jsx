import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ValueInput from './ValueInput';
import CurrencyInput from './CurrencyInput';
import PaymentInput from './PaymentInput';
import TagInput from './TagInput';
import DescriptionInput from './DescriptionInput';

import { saveExpense as save } from '../actions';

class EditExpense extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      id: 0,
      exchangeRates: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.setExpense = this.setExpense.bind(this);
  }

  componentDidMount() {
    this.setExpense();
  }

  setExpense() {
    const { expenses, idToEdit } = this.props;
    this.setState(expenses[idToEdit]);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies, saveExpense } = this.props;
    return (
      <form className="expenses-form bg-success">
        <ValueInput value={ value } onChange={ this.handleChange } />
        <CurrencyInput
          onChange={ this.handleChange }
          currencies={ currencies }
          value={ currency }
        />
        <PaymentInput value={ method } onChange={ this.handleChange } />

        <TagInput value={ tag } onChange={ this.handleChange } />

        <DescriptionInput value={ description } onChange={ this.handleChange } />

        <button
          type="button"
          className="btn btn-dark"
          onClick={ () => saveExpense(this.state) }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (payload) => dispatch(save(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});

EditExpense.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  idToEdit: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
