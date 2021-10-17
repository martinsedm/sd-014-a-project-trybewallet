import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <header>
        <h1 data-testid="email-field">{email}</h1>
        <h1 data-testid="total-field">{totalExpenses}</h1>
        <h1 data-testid="header-currency-field">BRL</h1>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

WalletHeader.defaultProps = {
  totalExpenses: 0,
};

export default connect(mapStateToProps)(WalletHeader);
