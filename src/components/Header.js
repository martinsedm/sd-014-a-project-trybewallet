import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      expenses: 0,
    };
  }

  // expensesMath() {
  //   const { expenses } = this.state;
  //   const { globalState } = this.props;
  //   const { wallet } = globalState;
  //   console.log(wallet.expenses);
  //   console.log(expenses);
  // }

  render() {
    const { expenses } = this.state;
    const { globalState } = this.props;
    const { user } = globalState;
    return (
      <div>
        <h2>Header</h2>
        {/* { this.expensesMath() } */}
        <p data-testid="email-field">{user.email}</p>
        <p data-testid="total-field">{expenses}</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="expenses">
            Valor
            <input type="text" name="expenses" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select>
              {/* <option value="currency">API</option> */}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select>
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select>
              <option value="food-expenses">Alimentação</option>
              <option value="recreation-expenses">Lazer</option>
              <option value="job-expenses">Trabalho</option>
              <option value="transport-expenses">Transporte</option>
              <option value="healthcare-expenses">Saúde</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

Header.propTypes = {
  globalState: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
    wallet: PropTypes.shape({}),
  }).isRequired,
};

// como aprendi a ler somente o estado da store para pegar o user.email
// https://www.youtube.com/watch?v=u99tNt3TZf8&t=1803s
export default connect((state) => ({ globalState: state }))(Header);
