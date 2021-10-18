import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends Component {
  render() {
    const { walletTotal, userEmail } = this.props;
    const updatedTotal = walletTotal ? parseFloat(walletTotal).toFixed(2) : 0;

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
  walletTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletTotal: state.wallet.total,

});

export default connect(mapStateToProps, null)(Wallet);
