import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  // Ref GitHub do Marcello Alves https://github.com/tryber/sd-014-a-project-trybewallet/pull/2/commits

  totalExpenses() {
    const { expenses } = this.props;
    console.log(expenses);
    const totalExpense = expenses.reduce((total, expense) => {
      const valueItem = Math.round(Number(expense.value)
      * Number(expense.exchangeRates[expense.currency].ask) * 100) / 100;
      total += valueItem;
      return total;
    }, 0);
    return totalExpense;
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        TrybeWallet
        <div data-testid="email-field">
          {`Email: ${email}`}
        </div>
        <div>

          <div data-testid="total-field">
            {`Despesa Total: R$ ${this.totalExpenses()}`}
          </div>
          <span data-testid="header-currency-field">BRL</span>
        </div>

      </header>);
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Form />

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
