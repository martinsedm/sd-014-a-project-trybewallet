import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesTable from '../components/ExpensesTable';
import HeaderWallet from '../components/HeaderWallet';
import { addCurrenciesThunk, addExpense as addExpenseAction } from '../actions/index';

class Wallet extends React.Component {
  render() {
    const {
      addCurrenciesApi,
      addExpense, getEmail,
      getCurrencies,
      getExpenses } = this.props;

    return (
      <>
        <HeaderWallet
          addCurrenciesApi={ addCurrenciesApi }
          addExpense={ addExpense }
          getEmail={ getEmail }
          getCurrencies={ getCurrencies }
          getExpenses={ getExpenses }
        />
        <main>
          <ExpensesTable getExpenses={ getExpenses } />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.expenses,
  getCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrenciesApi: () => dispatch(addCurrenciesThunk()),
  addExpense: (payload) => dispatch(addExpenseAction(payload)),
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  addCurrenciesApi: PropTypes.func.isRequired,
  getCurrencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
