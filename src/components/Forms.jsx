import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { tagOptions, methodOptions } from '../utils';
import {
  getCurrencies as getCurrenciesAction,
  saveExpenseThunk,
} from '../actions';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitButton = this.submitButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;

    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    const { saveExpense } = this.props;
    saveExpense(this.state);
  }

  submitButton() {
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          id="value"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        >
          Valor:
        </Input>
        <Input
          id="description"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        >
          Descrição:
        </Input>
        <Select
          name="currency"
          options={ currencies }
          onChange={ this.handleChange }
          value={ currency }
        >
          Moeda:
        </Select>
        <Select
          name="method"
          options={ methodOptions }
          onChange={ this.handleChange }
          value={ method }
        >
          Método de pagamento:
        </Select>
        <Select
          name="tag"
          options={ tagOptions }
          onChange={ this.handleChange }
          value={ tag }
        >
          Tag:
        </Select>
        { this.submitButton() }
      </form>);
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesAction()),
  saveExpense: (state) => dispatch(saveExpenseThunk(state)),
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
