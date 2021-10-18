import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormsAddexpense from './FormsAddExpense';

class HeaderWallet extends Component {
  render() {
    const { getEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{`seu email: ${getEmail}`}</p>
        <p data-testid="total-field">
          0
          <span data-testid="header-currency-field">BRL </span>
        </p>
        <FormsAddexpense />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.expenses,
});

HeaderWallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
