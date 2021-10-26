import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { walletExpenses } from '../actions';
import Inputs from './Inputs';
import Selects from './Selects';

class Expenses extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const exchangeRates = await (await
    fetch('https://economia.awesomeapi.com.br/json/all')).json();

    this.setState({
      exchangeRates,
    });

    const { addExpense } = this.props;
    addExpense(this.state);

    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
  }

  render() {
    // src: https://github.com/tryber/sd-014-a-project-trybewallet/pull/66/commits/ee7f913468860a47e08059e7a6ea5cd04caec409
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const metodoDePagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categorias = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Inputs
          label="Valor:"
          type="number"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Inputs
          label="Descrição:"
          type="text"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Selects
          label="Moeda:"
          id="currency"
          value={ currency }
          array={ currencies }
          onChange={ this.handleChange }
        />
        <Selects
          label="Método de pagamento:"
          id="method"
          value={ method }
          array={ metodoDePagamento }
          onChange={ this.handleChange }
        />
        <Selects
          label="Tag:"
          id="tag"
          value={ tag }
          array={ categorias }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currencies: state.wallet.currencies,
  }
);

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(walletExpenses(expense)),
});

Expenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any),
  addExpense: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
