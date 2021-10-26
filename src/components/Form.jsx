import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import WalletSelect from './WalletSelect';
import { setExpense } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  /**
 * Consultei o repositório do FERNANDO NASCIMENTO para resolver essa parte.
 * Link do repositório: https://github.com/tryber/sd-014-a-project-trybewallet/pull/21/commits/709a67f3a196d17ad9922482354477aa13e3b662?authenticity_token=pDsKXvagclIWy1ljCREtEr38JRqbh%2BH4vbKpjSJwLcN%2FWGa3pTgOCXHGk2cCDCtkTHCoXUYQAeinscr%2Fb66LCQ%3D%3D&file-filters%5B%5D=
 */

  async getCurrencies() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    return currencies;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { value, description, currency, method, tag } = this.state;
    const { addExpense } = this.props;
    const currencies = await this.getCurrencies();
    const expense = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    addExpense(expense);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const methods = ['Dinheiro',
      'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          name="value"
          labelText="Valor:"
          value={ value }
          type="number"
          onChange={ (e) => this.handleChange(e) }
        />
        <WalletSelect
          name="currency"
          labelText="Moeda:"
          options={ currencies }
          value={ currency }
          xablau={ this.handleChange }
        />
        <WalletSelect
          name="method"
          labelText="Método de pagamento:"
          options={ methods }
          value={ method }
          xablau={ this.handleChange }
        />
        <WalletSelect
          name="tag"
          labelText="Tag:"
          options={ tags }
          value={ tag }
          xablau={ this.handleChange }
        />
        <Input
          name="description"
          labelText="Descrição:"
          value={ description }
          onChange={ (e) => this.handleChange(e) }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(setExpense(expense)),
});

Form.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
