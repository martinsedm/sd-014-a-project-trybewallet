import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends Component {
  render() {
    const { updatedTotal, userEmail } = this.props;

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
                {` R$ ${updatedTotal || 0}` }
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
  updatedTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({

  userEmail: state.user.email,
  updatedTotal: state.wallet.total,

});

export default connect(mapStateToProps, null)(Wallet);
