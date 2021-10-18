import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends Component {
  render() {
    const { userEmail, walletExpenses } = this.props;

    const updatedTotal = walletExpenses
      .reduce((acc, { value, currency, exchangeRates }) => {
        const rate = exchangeRates[currency].ask;
        const expenses = acc + (1 * value) * (1 * rate);
        return expenses;
      }, 0);

    return (
      <>
        <header>
          <div>
            LOGO
          </div>
          <div>
            <span data-testid="email-field">{ userEmail }</span>
            <span>
              Despesa Total:
              <strong data-testid="total-field">
                {` R$ ${updatedTotal}` }
              </strong>
              <strong data-testid="header-currency-field"> BRL</strong>
            </span>
          </div>
        </header>
        <main>
          <AddExpenseForm handleChange={ this.handleChange } />
          <ExpenseTable />
        </main>
      </>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletExpenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletExpenses: state.wallet.expenses,

});

export default connect(mapStateToProps, null)(Wallet);
