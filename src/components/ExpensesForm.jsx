import React from 'react';
import SelectCurrency from './SelectCurrency';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      expenseValue: 0,
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { expenseValue, description, currency, payment, tag } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Despesas</legend>
          <label htmlFor="expenseValue">
            Valor
            <input
              type="text"
              id="expenseValue"
              name="expenseValue"
              value={ expenseValue }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <SelectCurrency currency={ currency } />
          <label htmlFor="payment">
            Pagamento
            <select name="payment" id="payment" value={ payment }>
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debido">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag" value={ tag }>
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default ExpensesForm;
