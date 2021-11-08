import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurrencyApi from '../services/currencyAPI';
import { setExpenses } from '../actions/index';
import Input from './Input';
import Select from './Select';
import Button from './Button';

class FormAddExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      expenses: [],
    };

    // this.sumExpense = this.sumExpense.bind(this);
    // this.fetchCurrencyApi = this.fetchCurrencyApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { id, value, currency, method, tag, description, expenses } = this.state;
    const { dispatchSetValue, sum } = this.props;
    const jsonX = await fetchCurrencyApi();
    this.setState({
      id: id + 1,
      expenses: [...expenses, {
        id,
        value,
        currency,
        method,
        tag,
        description,
        exchangeRates: jsonX,
      }],
    });
    dispatchSetValue(this.state);
    sum();
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    const payMethodOpt = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOpt = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          type="number"
          name="value"
          label="Valor"
          value={ value }
          onChange={ this.handleChange }
        />
        <Select
          name="currency"
          label="Moeda"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          name="method"
          label="Método de pagamento"
          value={ method }
          options={ payMethodOpt }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          label="Tag"
          value={ tag }
          options={ tagOpt }
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          name="description"
          label="Descrição"
          value={ description }
          onChange={ this.handleChange }
        />
        <Button name="button" label="Adicionar despesa" onClick={ this.handleClick } />
      </form>
    );
  }
}

FormAddExpense.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
  sum: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (state) => dispatch(setExpenses(state.expenses)),
});

export default connect(null, mapDispatchToProps)(FormAddExpense);
