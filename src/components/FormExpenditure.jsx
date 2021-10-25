import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExpenses as getExpensesAction } from '../actions';
import { fetchCurrencies } from '../services/api';
import Input from './Expenditure_components/Input';
import Select from './Expenditure_components/Select';

class FormExpenditure extends Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitExpensive = this.submitExpensive.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async submitExpensive(event) {
    event.preventDefault();
    const { getExpensives } = this.props;
    const exchangeRates = await fetchCurrencies();
    this.setState((prevState) => ({
      id: prevState.id + 1,
      exchangeRates,
    }));
    getExpensives(this.state);
  }

  render() {
    const { currencies } = this.props;
    const { currency, method, tag } = this.state;
    return (
      <section>
        <form onSubmit={ this.submitExpensive }>
          <Input
            htmlFor="value"
            label="Valor:"
            testid="value-input"
            type="number"
            onChange={ this.handleChange }
          />

          <Input
            htmlFor="description"
            label="Descrição:"
            testid="description-input"
            type="text"
            onChange={ this.handleChange }
          />
          <Select
            htmlFor="currency"-
            label="Moeda:"
            testid="currency"
            options={ currencies }
            onChange={ this.handleChange }
            value={ currency }
          />
          <Select
            htmlFor="method"
            label="Método de pagamento:"
            testid="payment"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            onChange={ this.handleChange }
            value={ method }
          />
          <Select
            htmlFor="tag"
            label="Tag:"
            testid="tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            onChange={ this.handleChange }
            value={ tag }
          />
          <button type="submit">Adicionar despesa</button>
        </form>
      </section>
    );
  }
}

FormExpenditure.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getExpensives: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  getExpensives: (expenses) => dispatch(getExpensesAction(expenses)),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
export default connect(mapStateToProps, mapDispatchToProps)(FormExpenditure);
