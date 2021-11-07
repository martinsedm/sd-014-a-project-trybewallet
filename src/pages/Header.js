import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenseTotal = 0 } = this.props;

    return (
      <header>
        <h2>Tribe Wallet</h2>
        <h1 data-testid="email-field">{ email }</h1>
        <h1 data-testid="header-currency-field">BRL</h1>
        <h1 data-testid="total-field">{expenseTotal}</h1>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenseTotal: state.wallet.expenseTotal,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenseTotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
